const express = require("express");
const {getFullUsers, creatUser} = require("../services/CRUD.service")
const router = express.Router();

const { getHomePage } = require("../controllers/homepage");



router.get("/", getHomePage)
router.post("/creating-user", creatUser)

module.exports = router;