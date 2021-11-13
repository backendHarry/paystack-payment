//3RD PARTIES!!!
require("dotenv").config({ path: "config.env" });
const express = require("express");
const session = require("express-session");
const store = require("connect-mongo").default;

// CUSTOM
const databaseConn = require("./server/database/connect");

const authRouter = require("./server/routes/auth");
const productRoute = require("./server/routes/products");

const passport = require("./server/service/passport");

const isAuthFunc = require("./server/middleware/auth");

// MONGO STORE
let sessionStore = store.create({
  mongoUrl: process.env.MONGO_URL,
  collection: "session",
});

const app = express();

// FOR PARSING REQUEST
app.use(express.json());

// session Middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", authRouter); // Authnetication routes
app.use("/api/v1/", isAuthFunc, productRoute); // product Routes

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

// DATABASE AND SERVER CONNECTION
const PORT = process.env.PORT || 3000;
databaseConn(() =>
  app.listen(PORT, () =>
    console.log(`server is currently running at PORT ${PORT}`)
  )
);
