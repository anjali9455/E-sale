// api/lead.js
const express = require('express');
const router = express.Router();
const LeadModel = require('../models/Lead');

// Route for creating a new user
router.post('/', (req, res) => {
  const leadData = req.body;
  LeadModel.create(leadData)
    .then((lead) => {
      res.json(lead);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

// Other user-related routes can be defined here

module.exports = router;
