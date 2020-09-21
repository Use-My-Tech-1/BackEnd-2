const jwt = require('jsonwebtoken');

const authError = {
  message: 'You are not permitted here'
};

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json(authError);
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json(authError);
      }

      req.token = decoded;

      if (decoded.owner === 0) {
        return res.status(401).json(authError);
      }

      next();
    });
  } catch (err) {
    next(err);
  }
};
