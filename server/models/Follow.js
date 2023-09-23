const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 for generating unique identifiers

const followSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4, // Generate a unique identifier using uuidv4
  },
  LeadID: {
    type: Number,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  NextFollowUp: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  }
});

const FollowModel = mongoose.model('Follow', followSchema);

module.exports = FollowModel;
