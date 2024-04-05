const {createUser} = require("../../services/signUp")

const postUserinfo = (req, res) => {
    createUser(req, res)
}

module.exports= {postUserinfo}