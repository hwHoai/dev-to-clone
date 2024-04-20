const {createNewUser} = require("../../services/signUp")
const {dbGetFullUsers} = require("../../models/get.userInfor")
const logIn = require("../../services/logIn")

class UsersInforController {
    

    sendNewUserInfoToBD = async(req, res) => {
        res.send(await createNewUser(req, res))
    }
    
    sendUserInfoToBD = (req, res) => {
        logIn(req, res)
    }
    
    getFullUsersInfor = async (req,res) => {
        const users = await dbGetFullUsers();
        res.send(users.rows)
    }
}

module.exports = new UsersInforController