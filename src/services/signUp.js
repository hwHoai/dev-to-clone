const {getUserInforFromClient} = require("../models/get.userInfor.js")
const {queryAddNewUserToDB} = require("../models/queryDB.js")
const {isUserInforValid} = require("../middlewares/validateUser.js")
const configUserInfo = require("../config/usersInfo.js")


const createNewUser = async (req,res) => {
    const {...newUserInfor} = await getUserInforFromClient(req)
    if(await isUserInforValid(newUserInfor)) {
        await queryAddNewUserToDB(newUserInfor)
        return {
            "message":"Create User succeeded!!",
            "email" : `${newUserInfor.email}`,
            "userName" : `${newUserInfor.userName}`,
            "password" : `${newUserInfor.password}`
            }
    } else {
        return await configUserInfo(newUserInfor)
    }
    
    
}

module.exports = {createNewUser}