const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");
const {
  signUpController,
  loginController,
} = require("../Controler/authController.js");

router.post("/login", loginController);
router.post("/signup", signUpController);

module.exports = router;
