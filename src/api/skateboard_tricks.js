const express = require('express');
const router = express.Router();

// @route   GET api/skateboard_tricks
// @desc    test route
// @access  public
router.get('/', (req, res) => res.send('Skateboard Tricks route'));

module.exports = router;
