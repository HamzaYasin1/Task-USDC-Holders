const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: path.resolve(process.cwd(), process.env.NODE_ENV || '.env') });
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');
const app = express();
const router = require('./routes/index');
const { fetchPastEvents, subscribeToEvents } = require("./accoutHolderScripts");
mongoose.set("strictQuery", false);


// Set up MongoDB connection
const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    console.log('Retrying connection to MongoDB...');
    setTimeout(connectToMongo, 5000);
  }
};

// Configure Express middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
}));

// Connect to MongoDB
connectToMongo();

// Set up routes
app.use('/api/v1', router);
fetchPastEvents()
subscribeToEvents()
// Start the server
const PORT = process.env.PORT || 8003;
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`Account holder service is listening on port ${PORT}`);
});

