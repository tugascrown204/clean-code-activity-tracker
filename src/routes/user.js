const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration (example)
router.post('/register', async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Export the router
module.exports = router;
