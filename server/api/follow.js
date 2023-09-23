const express = require('express');
const router = express.Router();
const FollowModel = require('../models/Follow');

// Route for creating a new follow-up
router.post('/', async (req, res) => {
  try {
    // const followData = req.body;
    const { _id, ...followData } = req.body
    const follow = await FollowModel.create(followData);
    res.json(follow);
  } catch (error) {
    console.error('Error creating follow-up:', error);
    res.status(500).json({ error: 'Error creating follow-up', details: error.message });
  }
});

// Route for updating a follow-up by its ID
router.put('/:id', async (req, res) => {
  const followUpId = req.params.id;
  const updatedFollowup = req.body;

  try {
    // Update the follow-up with the provided ID using the updated data
    const updatedFollowupRecord = await FollowModel.findByIdAndUpdate(followUpId, updatedFollowup, { new: true });
    res.json(updatedFollowupRecord);
  } catch (error) {
    console.error('Error updating follow-up:', error);
    res.status(500).json({ error: 'Error updating follow-up', details: error.message });
  }
});

// Route for retrieving all follow-ups
router.get('/', async (req, res) => {
  try {
    const follows = await FollowModel.find({});
    res.json(follows);
  } catch (error) {
    console.error('Error fetching follow-ups:', error);
    res.status(500).json({ error: 'Error fetching follow-ups' });
  }
});


// Other follow-up-related routes can be defined here
// Route for deleting a follow-up
router.delete('/:followUpId', (req, res) => {
  const { followUpId } = req.params;

  FollowModel.findByIdAndDelete(followUpId) // Use FollowModel
    .then(() => {
      res.json({ message: 'Follow-up deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting follow-up:', error);
      res.status(500).json({ error: 'Error deleting follow-up' });
    });
});

module.exports = router;
