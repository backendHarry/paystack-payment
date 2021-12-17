//3RD PARTIES!!!
require("dotenv").config({ path: "config.env" });
const express = require("express");
const session = require("express-session");
const store = require("connect-mongo").default;
const passport = require("passport");
const cors = require("cors");

// CUSTOM
const databaseConn = require("./server/database/connect");

// Urls
const authUrl = require("./server/routes/auth");
const productsUrl = require("./server/routes/products");

// MONGO STORE
let sessionStore = store.create({
  mongoUrl: process.env.MONGO_URL,
  collection: "session",
});

const app = express();

// CORS
app.use(cors());

// FOR PARSING REQUEST
app.use(express.json());

// session Middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", authUrl);
app.use("/api/v1/products", productsUrl);

// 404 NOT FOUND ERROR
app.use((req, res, next) => {
  res.status(404).json({ message: "sorry, the required resource not found." });
  next();
});

// 500 SERVER ERROR
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An error occurred. Our engineers are fixing this right now!!",
  });
});

// production use case
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DATABASE AND SERVER CONNECTION
const PORT = process.env.PORT || 3000;
databaseConn(() =>
  app.listen(PORT, () =>
    console.log(`server is currently running at PORT ${PORT}`)
  )
);

// Admin functionality
require("./admin");

// "dev": "nodemon server.js --ignore client"
