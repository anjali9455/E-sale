// api/users.js
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// Route for creating a new user
router.post('/', (req, res) => {
  const userData = req.body;
  UserModel.create(userData)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

// Other user-related routes can be defined here

module.exports = router;
