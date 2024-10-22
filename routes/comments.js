const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, async (req, res) => {
  const { videoId, content } = req.body;

  if (!videoId || !content) {
    return res.status(400).json({ message: 'No video or no content' });
  }

  try {
    const comment = new Comment({
      videoId,
      userId: req.user.id, 
      content,
    });

    await comment.save();
    res.json(comment);
    
  } catch (error) {
    res.json({ message: 'Server error', error });
  }
});

module.exports = router;
