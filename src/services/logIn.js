const {getUserInforFromClient} = require("../models/get.userInfor.js")
const {queryGetUserByEmail} = require("../models/queryDB.js")
const configUserInfo = require("../config/usersInfo.js")

const logIn = async (req, res) => {
    const {email,password} = await getUserInforFromClient(req)
    const {...result} = await queryGetUserByEmail(email, password)
    if (result.email) {
        res.send("logged in!!")
    } else {
        res.send("User is not exist")
    }
    
    
}

module.exports = logIn