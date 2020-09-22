const Items = require('../items/items-model');

function validateItemData() {
  return (req, res, next) => {
    const { itemName, price, description, rentalTerm } = req.body;

    if (!itemName || !price || !description || !rentalTerm) {
      res.status(400).json({ message: 'Missing required fields' });
    } else {
      next();
    }
  };
}

function validateItemId() {
  return async (req, res, next) => {
    try {
      const item = await Items.findById(req.params.id);
      if (item) {
        req.item = item;

        next();
      } else {
        res.status(404).json({ message: 'Could not find item with given id' });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  validateItemData,
  validateItemId
};
