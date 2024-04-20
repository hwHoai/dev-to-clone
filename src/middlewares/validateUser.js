const {getUserInforFromClient} = require("../models/get.userInfor.js")
const configUserInfo = require("../config/usersInfo.js")

const isUserInforValid = async (newUserInfor) => {
    const result =  await configUserInfo(newUserInfor)
    return result.status
}

module.exports = {isUserInforValid}