const {queryGetAllUserInfo} = require("./handle.query") 

const clientGetNewUserInfor = (req) => {
    let email = req.body.email;
    let userName = req.body.username;
    let password = req.body.password;
    return [email, userName, password]
}

const dbGetFullUsers = async () => {
    return queryGetAllUserInfo()
}

module.exports = {clientGetNewUserInfor, dbGetFullUsers }