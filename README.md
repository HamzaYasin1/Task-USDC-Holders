Install dependencies:
cd wallet-service
npm install


Set up environment variables:

NODE_ENV=development
PORT=8003
MONGO_URL=<your-mongodb-connection-url>
SOCKET_URI=<your-socket-uri>
CONTRACT_ADDRESS=<your-contract-address>

npm start


Functionality
The Account holder service provides the following functionality:

Connects to MongoDB to store and retrieve account data
Connects to the Ethereum blockchain using Web3 and interacts with a smart contract at the specified contract address which is USDC
Retrieves past events from the contract and updates account balances
Subscribes to new events and updates account balances in real-time


API Endpoints
The following API endpoints are available:

GET /api/v1/account/account-holders: Retrieves all account holders

