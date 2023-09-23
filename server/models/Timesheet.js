const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
 // Let MongoDB auto-generate the _id
 _id: mongoose.Schema.Types.ObjectId,

    Date: {
        type: Date,
        required: true,
      },
      
      LastFollowUp: {
        type: String,
        required: true,
      },
  NextFollowUp: {
    type: String,
    required:true,
  },
  Status:{
    type: String,
    required: true,
  },
  AddContact:{
    type:[String],
    required: true,
  },
  
Name : {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},

Phone: {
    type: String,
    required: true,
},
Roleincompany :{
    type: String,
    required: true,
},
InfluenceLevel: {
    type: String,
    required: true,
},
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
  
);

const TimesheetModel = mongoose.model('Timesheet', timesheetSchema);

module.exports = TimesheetModel;