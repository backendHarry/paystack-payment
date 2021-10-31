const express = require("express");
const router = express.Router();
// CONTROLLERS
const {
  indexController,
  registerController,
  loginController,
} = require("../controller/auth");

// GET
router.get("/", indexController);

// POST

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
