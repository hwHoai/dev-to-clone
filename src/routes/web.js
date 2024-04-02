const express = require("express");
const router = express.Router();

const { getHomePage } = require("../controllers/homepage");

router.get("/", getHomePage)

module.exports = router;