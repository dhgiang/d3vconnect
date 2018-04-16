const express = require('express');
const router = express.Router();

// @route   GET api/posts/
// @desc    Test posts route
// @access  Public
router.get('/', (req, res) => res.json({msg: "posts works!"}));

module.exports = router;
