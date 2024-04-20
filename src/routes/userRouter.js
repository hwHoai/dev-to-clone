const express = require("express");
const router = express.Router();

const {
    sendNewUserInfoToBD,
    sendUserInfoToBD,
    getFullUsersInfor,} = require("../controllers/user/UsersInforController")


router.get("/full-users", getFullUsersInfor)

router.post("/creating-user", sendNewUserInfoToBD)
router.post("/logging-in", sendUserInfoToBD)

module.exports = router