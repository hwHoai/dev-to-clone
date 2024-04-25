const express = require("express");
const router = express.Router();

const {
  homepage,
  signUpPage,
  logInPage,
} = require("../controllers/SiteController");

router.get("/signup", signUpPage);
router.get("/login", logInPage);
router.get("/", homepage);

module.exports = router;
