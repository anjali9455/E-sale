const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
LeadID: {
    type: String,
    required: true,
  },
  
  Date: {
    type: String,
    required: true,
    
  },
  NextFollowUp: {
    type: String,
  },
  Location:{
    type:[String],
    required: true,
  },
  Status:{
    type:[String],
    required: true,
  }
  
});

const FollowModel = mongoose.model('Follow', followSchema);

module.exports = FollowModel;