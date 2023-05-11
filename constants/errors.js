const ErrorMessages = {
    GENERIC_ERROR: {
      /**
       * Returns an error message for a failed operation.
       * @param {string} operationName - The name of the operation.
       * @param {string} error - The specific error message (optional).
       * @returns {string} The error message.
       */
      OPERATION_FAIL: (operationName, error) =>
        `${operationName} operation fail. We are facing some internal server issues. Please try again later.${error ? " " + error : ""}`,
    },
  };
  
  module.exports = {
    ErrorMessages,
  };
  