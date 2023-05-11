import invoke from "../utils/invoke";
import { config } from "../config/config";

// Function to fetch account holders
export const getAccountHolders = () => {
    // Invoke the API request using the invoke utility function
    return invoke({
        method: "GET",
        baseURL: config.baseuUrl,
        route: "account/account-holders",
    });
};



