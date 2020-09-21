const express = require('express');
const Items = require('./items-model');

const router = express.Router();

// @desc    Get all items
// @route   GET /api/items
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const items = await Items.find();

    res.json({ count: items.length, data: items });
  } catch (err) {
    next(err);
  }
});

// @desc    Get single item
// @route   GET /api/items/:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Items.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: 'Item does not exist'
      });
    }

    res.json({ data: item });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
