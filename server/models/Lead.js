const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
FirstName: {
    type: String,
    required: true,
  },
  
  LastName: {
    type: String,
    required: true,
    
  },
  address: {
    type: String,
  },
  PhoneNumbers:{
    type:[String],
    required: true,
  }
  
});

const LeadModel = mongoose.model('Lead', leadSchema);

module.exports = LeadModel;