const express = require('express');
const router = express.Router();
const FollowModel = require('../models/Follow');

// Route for creating a new follow-up
router.post('/', async (req, res) => {
  try {
    const followData = req.body;
    const follow = await FollowModel.create(followData);
    res.json(follow);
  } catch (error) {
    console.error('Error creating follow-up:', error);
    res.status(500).json({ error: 'Error creating follow-up' });
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

module.exports = router;
