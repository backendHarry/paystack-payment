const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const authFunction = async (username, password, cb) => {
  try{
  const user = await User.findOne({ username });
  if (!user) {
    cb(null, false, {
      error: {
        username: "Sorry, username is wrong. Make sure it is fakeAdmin",
      },
    });
  }
  else{
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
    cb(null, false, {
      error: {
        password: "Oops!. Password is wrong, make sure password is admin123",
      },
    });
    }
  }
  return cb(null, user);
  }catch(err){
    console.log(err)
  }
};

passport.use(new LocalStrategy(authFunction));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await User.findById(id);
  if (user) return cb(null, user);
});

module.exports = passport;
