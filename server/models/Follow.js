const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
LeadID: {
    type: Number,
    required: false,
  },
  
  Date: {
    type: String,
    required: false,
    
  },
  NextFollowUp: {
    type: String,
  },
  Location:{
    type:[String],
    required: false,
  },
  Status:{
    type:[String],
    required: false,
  }
  
});

const FollowModel = mongoose.model('Follow', followSchema);

module.exports = FollowModel;