const express = require('express');
const router = express.Router();
const {
    getFullUsersInfor,
    userProfile,
} = require('../controllers/user/UsersInforController');

//[GET]
router.get('/full-users', getFullUsersInfor);
router.get('/user-profile', userProfile);
//[POST]

module.exports = router;
