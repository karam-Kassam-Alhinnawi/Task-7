const express = require('express');
const Video = require('../models/Video');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Add Video
router.post('/:courseId', authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const { courseId } = req.params;
    try {
        const newVideo = new Video({ title, description, course: courseId });
        await newVideo.save();
        res.json(newVideo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
