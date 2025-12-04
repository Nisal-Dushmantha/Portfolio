const express = require('express');
const router = express.Router();
const Profile = require('../Model/Profile');

// GET profile information
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne({ isActive: true });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create profile (for initial setup or admin)
router.post('/', async (req, res) => {
  try {
    // Deactivate any existing active profile
    await Profile.updateMany({ isActive: true }, { isActive: false });
    
    const profile = new Profile(req.body);
    const savedProfile = await profile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update profile
router.put('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
