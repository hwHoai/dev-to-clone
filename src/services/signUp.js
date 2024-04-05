const {clientGetNewUserInfor} = require("../models/get.userInfor.js")
const {queryAddNewUserToDB} = require("../models/handle.query.js")

const createUser = async (req,res) => {
    const [...newUserInfor] = await clientGetNewUserInfor(req)

    await queryAddNewUserToDB(newUserInfor)
    
    res.send('Create User succeeded!!')
    
}

module.exports = {createUser}