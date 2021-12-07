const isLoggedIn = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.json({
        redirect: true,
        redirectUrl:
          "auth/login?message=Please log in to continue with the app",
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
