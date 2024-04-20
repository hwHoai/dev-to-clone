const express = require("express");
const router = express.Router();

const {
    homepage,
    signUpPage,
    logInPage,} = require("../controllers/SiteController")
    
router.get("/sign-up", signUpPage) 
router.get("/log-in", logInPage) 
router.use("/", homepage) 

module.exports = router