const passport = require("passport");
const Local = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");

const authHandler = async (username, password, cb) => {
  let user = await User.findOne({ username: username });
  if (!user) {
    cb(null, false, { errors: { username: "incorrect credentials" } });
  }
  let isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    cb(null, false, { errors: { password: "Incorrect credentials" } });
  }
  cb(null, user);
};

passport.use(new Local(authHandler));

passport.serializeUser((err, user) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id) => {
  let user = await User.findById(id);
  if (user) {
    cb(null, user);
  }
});

module.exports = passport;
