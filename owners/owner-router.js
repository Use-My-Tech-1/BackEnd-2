const express = require('express');
const Owners = require('./owners-model');
const { validateTokenId } = require('../middleware/user');

const router = express.Router();

// @desc    Get owner by id
// @route   GET /api/owner
// @access  Private
router.get('/', validateTokenId(), (req, res, next) => {
  try {
    res.json({ data: req.user });
  } catch (err) {
    next(err);
  }
});

// @desc    Get all items for rent
// @route   GET /api/owner/items
// @access  Private
router.get('/items', validateTokenId(), async (req, res, next) => {
  try {
    const itemList = await Owners.getItems(req.user.id);

    if (itemList.length === 0) {
      return res.json({
        message: 'You do not have any items for rent'
      });
    }

    res.json({ data: itemList });
  } catch (err) {
    next(err);
  }
});
// @desc    Get single item
// @route   GET /api/owner/items/:id
// @access  Private

// @desc    Add item
// @route   POST /api/owner/items
// @access  Private

// @desc    Update item
// @route   PUT /api/owner/item/:id
// @access  Private

// @desc    Delete item
// @route   Delete /api/owner/item/:id
// @access  Private

module.exports = router;
