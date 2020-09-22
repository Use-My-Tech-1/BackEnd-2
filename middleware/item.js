const Items = require('../items/items-model');

function validateItemData() {
  return (req, res, next) => {
    if (!req.body.itemName) {
      return res.status(400).json({ msg: 'Missing required item name field' });
    } else if (!req.body.price) {
      return res.status(400).json({ msg: 'Missing required price field' });
    } else if (!req.body.description) {
      return res
        .status(400)
        .json({ msg: 'Missing required description field' });
    } else if (!req.body.rentalTerm) {
      return res
        .status(400)
        .json({ msg: 'Missing required rental term field' });
    }

    next();
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
