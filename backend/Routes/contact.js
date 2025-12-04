const express = require('express');
const router = express.Router();
const Contact = require('../Model/Contact');

// POST submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }
    
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    const savedContact = await contact.save();
    res.status(201).json({ 
      message: 'Message sent successfully!',
      id: savedContact._id 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all contact messages (for admin panel later)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT mark message as read
router.put('/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
