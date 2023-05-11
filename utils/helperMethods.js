const routeResponse = (res, status, message, data, statusCode) => {
    // Set the response status code
    res.status(statusCode).json({
        // Set the 'Success' field to the provided status value
        Success: status,
        // Set the 'message' field to the provided message
        message: message,
        // Set the 'data' field to the provided data
        data: data,
    });
};
// Export the routeResponse function to make it available in other modules
module.exports = {
    routeResponse
};
