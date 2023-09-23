const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
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
    required: false,
  },
  City :{
    type:String,
    required:true,
  },
  Type :{
    type:String,
    required:false,
  },
  NextFollowUp: {
    type:String,
    required:true,
  } , 
  Location:{
    type:String,
    required:true,
  } 

});

const LeadModel = mongoose.model('Lead', leadSchema);

module.exports = LeadModel;