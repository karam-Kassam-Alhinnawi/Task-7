const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Add Course
router.post('/', authMiddleware, async (req, res) => {
    const { title, description, duration } = req.body;
    try {
        const newCourse = new Course({ title, description, duration, instructor: req.user.id });
        await newCourse.save();
        res.json(newCourse);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
