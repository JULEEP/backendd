const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Express app initialize karein
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET request ke liye route define karein
app.get('/', (req, res) => {
  res.send('Welcome to our server!');
});

// MongoDB connection URL
const DB_URL = process.env.DB_URL;

// Mongoose connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Server ko port 3000 par listen karein
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
