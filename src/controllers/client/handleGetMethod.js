const {dbGetFullUsers} = require("../../models/get.userInfor")

const getHomePage = (req, res) => {
    res.render("homepage.ejs");
}

const getSignUpPage = (req, res) => {
    res.render("signup.ejs")
}
const getFullUsersInfor = async (req,res) => {
    const users = await dbGetFullUsers();
    res.send(users.rows)
}
module.exports = {
    getHomePage,
    getSignUpPage,
    getFullUsersInfor
}