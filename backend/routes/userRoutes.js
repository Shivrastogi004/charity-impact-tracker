const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// User Login
router.post('/login', userController.loginUser);


// Register a new user
/*
// User Registration (without password storage)
router.post('/register', async (req, res) => {
  try {
    
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    await newUser.save();
    res.json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
*/

// GET All USERS
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


/*
// User Login

const { registerUser, getAllUsers, loginUser } = require('../controllers/userController');

// User Login
router.post('/login', async (req, res) => {
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
});
*/

module.exports = router;



