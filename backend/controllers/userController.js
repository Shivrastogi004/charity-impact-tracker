const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register a new user
async function registerUser(req, res) {
  try {
    console.log('Received registration request:', req.body);
    const { name, email, password } = req.body;
    
    const newUser = new User({
      name,
      email,
      password: password,
    });

    await newUser.save();
    console.log('User Created Successfully!');
    res.json({ message: 'User created successfully!' });
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).json({ message: err.message });
  }
}

// User login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored plain text password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Password is correct, create JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}




//All Users Info
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { registerUser, getAllUsers, loginUser };






