const bcrypt = require("bcrypt");
const validateData = require("../service/validation");
const User = require("../models/user");
// const passport = require("passport");
const passport = require("../service/passport");

const indexController = async (req, res, next) => {
  try {
    let user = await User.findOne({ username: "harrison" });
    res.send("hello, welcome home");
  } catch (err) {
    console.log(err);
  }
};

const registerController = async (req, res, next) => {
  try {
    const result = validateData(req.body);
    const hashedPwd = await bcrypt.hash(result.password, 10);
    result.password = hashedPwd;
    const userData = await user.create(result);
    return res.status(201).json({ data: userData });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const loginController = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (!user) return res.json({ info });
      req.logIn(user, (err) => {
        next(err);
      });
      res.json({ message: "logged in success" });
    })(req, res, next);
  } catch (err) {
    // console.log(err);
    // next(err);
    res.send(err);
  }
};

module.exports = {
  indexController,
  registerController,
  loginController,
};
