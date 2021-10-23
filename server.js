require("dotenv").config({ path: "config.env" });
const express = require("express");
const databaseConn = require("./server/database/connect");

const app = express();

app.get("/", (req, res, next) => {
  try {
    res.json({ message: "welcome home" });
  } catch (err) {
    next(err);
    console.log(err);
  }
});

// 404 NOT FOUND ERROR
app.use((req, res, next) => {
  res.status(404).json({ message: "sorry, the required resource not found." });
  next();
});

// 500 SERVER ERROR
app.use((err, req, res, next) => {
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
