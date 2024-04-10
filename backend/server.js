const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDatabase = require('./db');


dotenv.config();

const app = express();
app.use(bodyParser.json());
// GET request ke liye route define karein

app.get('/', (req, res) => {
  res.send('Welcome to our server!');
});

connectDatabase()
    
    // Server ko port 3000 par listen karein
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
