const AccountHolder = require('../models/accountHolderModel');

/**
 * Updates the account data in the database.
 * @param {string} address - The address of the account.
 * @param {number} balanceChange - The change in balance value.
 * @throws {Error} If there is an error during the update.
 */

const updateAccountData = async (address, balanceChange) => {
    try {
        await AccountHolder.updateOne(
            { address },
            { $inc: { balance: balanceChange } },
            { upsert: true }
        );
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
};

module.exports = {
    updateAccountData,
};
