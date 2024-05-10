const express = require('express');
const router = express.Router();

const User = require('../models/model.user');

//[GET]
router.get('/user-profile', User.getuserProfile);
//[POST]

module.exports = router;
