// api/timesheet.js
const express = require('express');
const router = express.Router();
const TimesheetModel = require('../models/Timesheet');

// Route for creating a new user
router.post('/', (req, res) => {
  const timesheetData = req.body;
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

// Other user-related routes can be defined here

module.exports = router;
