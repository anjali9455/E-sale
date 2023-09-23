// api/users.js

const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// Route for creating a new user
router.post('/', (req, res) => {
  const userData = req.body;
  const totalPages = Math.ceil(totalUsers / pageSize);
  const newPage = totalPages;
    res.status(201).json({ message: 'User added successfully', page: newPage });
  UserModel.create(userData)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

// Route for updating an existing user
router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const updatedUserData = req.body;

  UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((error) => {
      console.error('Error updating user details:', error);
      res.status(500).json({ error: 'Error updating user details' });
    });
});

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    console.error('Error fetching follow-ups:', error);
    res.status(500).json({ error: 'Error fetching follow-ups' });
  }
});
router.delete('/:userId', (req, res) => {
  const { userId } = req.params;

  UserModel.findByIdAndDelete(userId)
    .then(() => {
      res.json({ message: 'User deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Error deleting user' });
    });
});
module.exports = router;
