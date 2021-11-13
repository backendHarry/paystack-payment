const isAuthenticated = (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = isAuthenticated;
