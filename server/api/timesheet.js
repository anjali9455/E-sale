// api/timesheet.js
const express = require('express');
const mongoose = require('mongoose');  
const router = express.Router();
const TimesheetModel = require('../models/Timesheet');

// Route for creating a new user
router.post('/', (req, res) => {
  const timesheetData = req.body;
  timesheetData._id = new mongoose.Types.ObjectId();                                                          
  console.log('Received timesheet data:', timesheetData);
  TimesheetModel.create(timesheetData)
    .then((timesheet) => {
      res.json(timesheet);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});
router.put('/:timesheetId', async (req, res) => {
  const { timesheetId } = req.params;
  const updatedTimesheetData = req.body;

  try {
    const updatedTimesheet = await TimesheetModel.findByIdAndUpdate(
      timesheetId,
      updatedTimesheetData,
      { new: true }
    );

    if (!updatedTimesheet) {
      return res.status(404).json({ error: 'Timesheet not found' });
    }

    res.json(updatedTimesheet);
  } catch (error) {
    console.error('Error updating timesheet:', error);
    res.status(500).json({ error: 'Error updating timesheet' });
  }
});
router.delete('/:timesheetId', async (req, res) => {
  const { timesheetId } = req.params;

  try {
    const deletedTimesheet = await TimesheetModel.findByIdAndDelete(timesheetId);

    if (!deletedTimesheet) {
      return res.status(404).json({ error: 'Timesheet not found' });
    }

    res.json({ message: 'Timesheet deleted successfully' });
  } catch (error) {
    console.error('Error deleting timesheet:', error);
    res.status(500).json({ error: 'Error deleting timesheet' });
  }
});
// Other user-related routes can be defined here

module.exports = router;
