const Users = require('../renters/renters-model');

function validateUserId() {
  return async (req, res, next) => {
    try {
      const user = await Users.findById(req.params.id);
      if (user) {
        req.user = user;

        next();
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = { validateUserId };
