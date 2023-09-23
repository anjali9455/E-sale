// // api/lead.js
// const express = require('express');
// const router = express.Router();
// const LeadModel = require('../models/Lead');

// // Route for creating a new user
// router.post('/', (req, res) => {
//   const leadData = req.body;
//   LeadModel.create(leadData)
//     .then((lead) => {
//       res.json(lead);
//     })
//     .catch((error) => {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Error creating user' });
//     });
// });

// // Other user-related routes can be defined here

// module.exports = router;
// api/lead.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const LeadModel = require('../models/Lead');

// Route for creating a new lead
router.post('/', async (req, res) => {
  try {
    const leadData = req.body;
    // Generate an _id using Mongoose's ObjectId
    leadData._id = new mongoose.Types.ObjectId();

    const lead = await LeadModel.create(leadData);
    res.status(201).json(lead);
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Error creating lead' });
  }
});

router.put('/:leadId', async (req, res) => {
  const { leadId } = req.params;
  const updatedLeadData = req.body;

  try {
    const updatedLead = await LeadModel.findByIdAndUpdate(leadId, updatedLeadData, {
      new: true,
    });

    if (!updatedLead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json(updatedLead);
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Error updating lead' });
  }
});
 router.delete('/:leadId', async (req, res) => {
  const { leadId } = req.params;

  try {
    const deletedLead = await LeadModel.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json({ message: 'Lead deleted successfully', deletedLead });
  } catch (error) {
    console.error(`Error deleting lead with ID ${leadId}:`, error);
    res.status(500).json({ error: 'Error deleting lead' });
  }
});

module.exports = router;
