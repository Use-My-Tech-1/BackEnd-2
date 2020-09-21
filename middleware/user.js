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

function validateUserData() {
  return (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ msg: 'Missing user data' });
    } else if (!req.body.username) {
      res.status(400).json({ msg: 'Missing required username field' });
    } else if (!req.body.email) {
      res.status(400).json({ msg: 'Missing required email field' });
    } else if (!req.body.owner) {
      res.status(400).json({ msg: 'Missing required owner field' });
    }

    next();
  };
}

module.exports = { validateUserId, validateUserData };
