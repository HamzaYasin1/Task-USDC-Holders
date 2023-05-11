const mongoose = require('mongoose');
// Define the accountHolderSchema using the Mongoose Schema class
const accountHolderSchema = new mongoose.Schema({
  // Define the address field as a required string with unique constraint
  address: { type: String, required: true, unique: true },
  // Define the balance field as a required number
  balance: { type: Number, required: true },
});
// Create the AccountHolder model using the accountHolderSchema
const AccountHolder = mongoose.model('AccountHolder', accountHolderSchema);

// Export the AccountHolder model to make it available in other modules
module.exports = AccountHolder;
