const express = require('express');
const Renters = require('./renters-model');
const { validateUserId } = require('../middleware/user');

const router = express.Router();

// @desc    Get rented items
// @route   GET /api/renter/:id/items
// @access  Private
router.get('/:id/items', validateUserId(), async (req, res, next) => {
  try {
    const items = await Renters.getRentedItems(req.params.id);

    if (items.length === 0) {
      return res.json({
        message: 'You have not rented any items'
      });
    }

    res.json({ data: items });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
