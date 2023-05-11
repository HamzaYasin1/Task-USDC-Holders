<!-- Install dependencies:
cd wallet-service
npm install


Set up environment variables:

NODE_ENV=development
PORT=8003 \
MONGO_URL=<your-mongodb-connection-url> \
SOCKET_URI=<your-socket-uri> \
CONTRACT_ADDRESS=<your-contract-address>


| Variable          | Value                    |
|-------------------|--------------------------|
| PORT              | 8003                     |
| MONGO_URL         |<connection-url>
| SOCKET_URI        |<your-socket-uri>         |
| CONTRACT_ADDRESS  |<your-contract-address>   |

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



[9:37 pm] Fahad Aziz -->




# Task-USDC-Holders Backend

This repository contains the backend code for the Task-USDC-Holders project. It implements functionality related to handling USDC holders' data using Node.js and Express.
## Getting Started
To get started with the backend server, follow the instructions below.

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/HamzaYasin1/Task-USDC-Holders.git

Change into the backend directory:

Install the dependencies:

cd wallet-service \
npm install

Configuration

Before running the server, you need to configure the application by setting up the environment variables.  
Create a production.env file in the root directory and provide the necessary configuration values.

Example production.env file:



| Variable          | Value                    |
|-------------------|--------------------------|
| PORT              | 8003                     |
| MONGO_URL         |mongodb-connection-url    | 
| SOCKET_URI        |your-socket-uri-ehtereum  |
| CONTRACT_ADDRESS  |your-contract-address     |




Starting the Server:

To start the backend server, run the following command:

npm start

The server will be running on the specified port, and you can access the API endpoints using the provided routes.

Usage:

The backend server provides API endpoints for managing USDC holders' data. You can find the available routes and their corresponding functionality in the routes directory. Refer to the code and the provided comments for detailed usage information.

Functionality:

The Account holder service provides the following functionality:

1: Connects to MongoDB to store and retrieve account data \
2: Connects to the Ethereum blockchain using Web3 and interacts with a smart contract at the specified contract address which is USDC \
3: Retrieves past events from the contract and updates account balances \
4: Subscribes to new events and updates account balances in real-time


API Endpoints

The following API endpoints are available:

GET /api/v1/account/account-holders: Retrieves all account holders
 






