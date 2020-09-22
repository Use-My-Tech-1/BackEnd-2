const express = require('express');
const Renters = require('./renters-model');
const { validateUserId, validatePost } = require('../middleware/user');

const router = express.Router();

// @desc    Get renter
// @route   GET /api/renter
// @access  Private
router.get('/', validateUserId(), (req, res, next) => {
  try {
    res.json({ data: req.user });
  } catch (err) {
    next(err);
  }
});

// @desc    Get rented items
// @route   GET /api/renter/items
// @access  Private
router.get('/items', validateUserId(), async (req, res, next) => {
  try {
    const items = await Renters.getRentedItems(req.user.id);

    if (items.length === 0) {
      return res.status(404).json({
        message: 'You have not rented any items'
      });
    }

    res.json({ data: items });
  } catch (err) {
    next(err);
  }
});

// @desc    Add rented item to list
// @route   POST /api/renter/items/:id
// @access  Private
router.post('/items/:id', validateUserId(), async (req, res, next) => {
  try {
    const item = await Renters.isItemAvailable(req.params.id);

    if (item.available === 0 || false) {
      return res.status(409).json({
        message: 'Item is not longer available for rent'
      });
    }
    const newItem = await Renters.addRentedItem(req.user.id, req.params.id);

    res.json(newItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
