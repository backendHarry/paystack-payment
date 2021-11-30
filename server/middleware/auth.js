const isLoggedIn = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      // res.redirect(
      //   // "api/v1/auth/login?message=Please log in to continue with the app"
      //   "loginController"
      // );
      res.redirect(
        "../auth/login?message=Please log in to continue with the app"
      );
    } else {
      return next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = isLoggedIn;
