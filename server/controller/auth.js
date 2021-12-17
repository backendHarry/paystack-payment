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
    res.json({ message: "fakeUser created", user: fakeUser });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const loginController = (req, res, next) => {
  try {
    let { error, value } = validateBody(req.body);
    if (!error) {
      passport.authenticate("local", (err, user, info) => {
        if (err) console.log(err);
        if (!user) return res.status(401).json({ info });
        req.logIn(user, (err) => {
          if (err) {
            console.log(err);
            return next(err);
          }
        });
        // Extra functionalities
        /* When we click on checkout, react will send a request to the backend to see if request is authenticated and if true,
        if request is true, which will be the "get" request, we will start flutter wave integration. If not true, the backend will redirect to a frontend url containing a form for user to input details, then when user clicks on send, the backend will redirect to the flutterwave page.
        Hence this means we will have a frontend url containing the form and getting there will be through a "GET" request hence the use of query strings. Then sending a request to be authenticated will be through a POST request  and if request is authenticated a redirect to the flutter wave will happen.
        */
        // Since we now have a session, store the email in the session
        req.session.email = value.email;
        //Check if a query string was passed to tell the user to continue the redirect to checkout
        res.json({ message: "logged in success", loggedIn: true });
      })(req, res, next);
    } else {
      return res.status(401).json({ error: error });
    }
  } catch (err) {
    console.log("failed");
    console.log(err);
    next(err);
  }
};
module.exports = {
  registerController,
  loginController,
};
