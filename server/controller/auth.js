const express = require("express");
const User = require("../models/user");
const validateBody = require("../service/validation");
const bcrypt = require("bcrypt");
const passport = require("../service/passport");

const registerController = async (req, res, next) => {
  try {
    const username = "fakeAdmin";
    const password = "admin123";
    const user = {
      username: username,
      password: password,
    };
    user.password = await bcrypt.hash(user.password, 10);
    const fakeUser = await User.create(user);
    res.json({ message: "fakeUser created", user: user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const loginController = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) console.log(err);
      if (!user) return res.status(401).json({ info });
      req.logIn(user, (err) => {
        if (err) {
          console.log(err);
          return next(err);
        }
      });
      res.json({ message: "logged in success" });
    })(req, res, next);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = {
  registerController,
  loginController,
};
