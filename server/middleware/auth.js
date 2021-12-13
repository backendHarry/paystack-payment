const isLoggedIn = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.status(200).json({
        redirect: true,
        redirectUrl:
          "auth/login?redirect=true&&message=Please log in to continue with the app",
      });
    } else {
      return next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = isLoggedIn;
