const express = require('express');
const router = express.Router();
const UsersModel = require('../models/'); // Import your user model
const { getUsers } = require('../controller/userController');

// Handle PUT request to update user details
router.post('/register',usersController.registerUsers);


router.post('/login',usersController.loginUsers);
router.put('/update', async (req, res) => {
  try {
    const { name, phone, email, address, description } = req.body;

    // Find the user by ID and update their details
    const updatedUsers = await UsersModel.findByIdAndUpdate(
      req.params.id,
      { name, phone, email, address, description },
      { new: true } // Return the updated user
    );

    if (!updatedUsers) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUsers);
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', getUsers );
router.post('/', getUsers );
router.delete('/', getUsers );
router.put('/', getUsers );



module.exports = router;