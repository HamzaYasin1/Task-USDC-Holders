const express = require('express');
const accountController = require('../controller/account');
// Create an instance of the Express router
const router = express.Router();
// Define the route handler for '/account/account-holders'
router.get('/account/account-holders', accountController);

// Export the router to make it available in other modules
module.exports = router;
