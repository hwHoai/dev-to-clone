const express = require("express");
const router = express.Router();
const {postUserinfo
       
      } = require("../controllers/sever/handlePostMethod")

const { getHomePage,
      getSignUpPage,
      getFullUsersInfor,
      } = require("../controllers/client/handleGetMethod");

router.get("/", getHomePage)
router.get("/sign-up", getSignUpPage)
router.get("/full-users", getFullUsersInfor)

router.post("/creating-user", postUserinfo)

module.exports = router;