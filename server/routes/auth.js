const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../controller/auth.js");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/login", loginController);

module.exports = router;
