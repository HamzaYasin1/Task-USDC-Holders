const AccountHolder = require('../models/accountHolderModel');
const { routeResponse } = require('../utils/helperMethods');
const { InfoMessages } = require('../constants/messages');
const { ErrorMessages } = require('../constants/errors');


module.exports = async (req, res) => {
    try {
        // Fetch all account holders from the database
        const accountHolders = await AccountHolder.find();
        // Send success response with the fetched account holders
        routeResponse(res, true, InfoMessages.GENERIC.ITEM_GET_SUCCESSFULLY("Account"), accountHolders, 200)
    } catch (error) {
        console.log(error)
        // Send error response if an error occurred
        routeResponse(res, false, ErrorMessages.GENERIC_ERROR.OPERATION_FAIL("Get account holder"), { error: { message: error.message } }, 500)
    }
}




