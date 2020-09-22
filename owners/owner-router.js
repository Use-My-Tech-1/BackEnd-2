const express = require('express');
const Owners = require('./owners-model');
const { validateUserId, validatePost } = require('../middleware/user');
const { validateItemData, validateItemId } = require('../middleware/item');

const router = express.Router();

// @desc    Get owner by id
// @route   GET /api/owner
// @access  Private
router.get('/', validateUserId(), (req, res, next) => {
  try {
    res.json({ data: req.user });
  } catch (err) {
    next(err);
  }
});

// @desc    Get all items for rent
// @route   GET /api/owner/items
// @access  Private
router.get('/items', validateUserId(), async (req, res, next) => {
  try {
    const itemList = await Owners.getItems(req.user.id);

    if (itemList.length === 0) {
      return res.json({
        message: 'You have not added any items'
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
router.get(
  '/items/:id',
  validateUserId(),
  validateItemId(),
  async (req, res, next) => {
    try {
      res.status(200).json({ data: req.item });
    } catch (err) {
      next(err);
    }
  }
);

// @desc    Add item
// @route   POST /api/owner/items
// @access  Private
router.post(
  '/items',
  validatePost(),
  validateUserId(),
  validateItemData(),
  async (req, res, next) => {
    try {
      const { itemName, price, description, rentalTerm, imageUrl } = req.body;
      const newItem = await Owners.add({
        itemName,
        price,
        description,
        rentalTerm,
        imageUrl,
        owner_id: req.user.id
      });

      res.status(201).json({ data: newItem });
    } catch (err) {
      next(err);
    }
  }
);

// @desc    Update item
// @route   PUT /api/owner/items/:id
// @access  Private
router.put(
  '/items/:id',
  validatePost(),
  validateUserId(),
  validateItemId(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;

      const updatedItem = await Owners.update(id, changes);

      res.json(updatedItem);
    } catch (err) {
      next(err);
    }
  }
);

// @desc    Delete item
// @route   Delete /api/owner/item/:id
// @access  Private
router.delete(
  '/items/:id',
  validateUserId(),
  validateItemId(),
  async (req, res, next) => {
    try {
      const count = await Owners.remove(req.params.id);

      res.json({ message: `${count} item(s) has been deleted` });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
