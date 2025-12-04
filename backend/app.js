const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const projectRoutes = require('./Routes/projects');
const contactRoutes = require('./Routes/contact');
const profileRoutes = require('./Routes/profile');

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/profile', profileRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!' });
});

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://nisalportfolio12_db_user:Mrlawa2003@portfoliocluster.krfpxeq.mongodb.net/';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });