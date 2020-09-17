const error = (err, req, res, next) => {
  console.log(`${err}`.red);

  res.status(500).json({
    message: 'Something went wrong, please try again later'
  });
};

module.exports = error;
