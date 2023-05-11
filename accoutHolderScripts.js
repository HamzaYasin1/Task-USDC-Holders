const Web3 = require('web3');
const { CONTRACT_ADDRESS, SOCKET_URI, ABI } = require('./config');
const { updateAccountData } = require('./db/account');

// Create a Web3 instance with a WebsocketProvider
const web3Instance = new Web3(new Web3.providers.WebsocketProvider(SOCKET_URI, {
    clientConfig: {
        maxReceivedFrameSize: 10000000000,
        maxReceivedMessageSize: 10000000000,
    }
}));

// Create a contract instance using the ABI and contract address
const usdcContract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS);

// Fetch past events and update account data
const fetchPastEvents = async () => {
    try {
        const endingBlock = await web3Instance.eth.getBlockNumber(); //This is our current latest block
        const startingBlock = 16730621;// Starting block from 1st March 2023
        const chunkSize = 100; // Number of blocks to retrieve in each request
        const events = [];

        // We are getting the data in chunks of 100  because we have limit we can only get data of 100 record in getPassEvents
        for (let i = startingBlock; i <= endingBlock; i += chunkSize) {
            const fromBlock = i;
            const toBlock = Math.min(i + chunkSize - 1, endingBlock); 

            const chunkResults = await usdcContract.getPastEvents('Transfer', {
                fromBlock: fromBlock,
                toBlock: toBlock
            });
            events.push(...chunkResults);
        }

        for (const event of events) {
            const { returnValues: { from, to, value } } = event;
            await updateAccountData(from, -value);
            await updateAccountData(to, value);
        }
    } catch (e) {
        console.log("Save in logs", e);
        fetchPastEvents();
    }
};

// Subscribe to new Transfer events and update account data
const subscribeToEvents = async () => {
    try {
        const subscription = await usdcContract.events.Transfer({
            fromBlock: 'latest',
        });

        subscription.on('data', async (event) => {
            const { returnValues: { from, to, value } } = event;
            await updateAccountData(from, -value);
            await updateAccountData(to, value);
        });
    } catch (e) {
        console.log("Save in logs", e);
        subscribeToEvents();
    }
};

module.exports = {
    fetchPastEvents,
    subscribeToEvents
};
