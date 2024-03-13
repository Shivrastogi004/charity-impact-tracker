const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');

// Use body-parser middleware
app.use(bodyParser.json());
app.use(cors()); 


// Initialise Routes API
const routes = require('./routes');
app.use('/api', routes);

// Initialise Routes API
const userRoutes = require('./routes/userRoutes'); // Import user routes
app.use('/api/users', userRoutes); // Mount user routes on /api/users endpoint

//Connect to MongoDB database
const uri = 'mongodb://127.0.0.1:27017/charity_impact_tracker';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//GET request Responses
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} , http://127.0.0.1:${PORT}/`);
  exec(`start http://127.0.0.1:${PORT}/`);
});
