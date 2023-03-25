const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");
const {
  getContest,
  createContest,
  getSignleContest,
  getPublicContest,
  getSignlePublicContest,
} = require("../Controler/contestController.js");

router.get("/contest/:id", getContest);
router.get("/clients/contest/:id", getSignleContest);
router.get("/publicContest/:id", getSignlePublicContest);
router.get("/publicContest", getPublicContest);
router.post("/contest", createContest);

module.exports = router;
