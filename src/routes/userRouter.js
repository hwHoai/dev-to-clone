const express = require("express");
const router = express.Router();

const logIn = require("../services/logIn");
const signup = require("../services/signUp");

router.post("/signup", signup);
router.post("/login", logIn);

module.exports = router;
