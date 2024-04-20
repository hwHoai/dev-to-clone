const path = require("path")
const connection = require(path.join(__dirname,"../config/db.js"))

const queryAddNewUserToDB = async (newUserInfor) => {
    const [email, userName, password] = [newUserInfor.email, newUserInfor.userName, newUserInfor.password]
    
    const results = await connection.query({
        text: `INSERT INTO Users (email, user_name, password) VALUES ($1, $2, $3)`,
        values: [email, userName, password],
    });

    return results;
}

const queryGetAllUserInfo = async () => {
    const results = await connection.query(
        `SELECT * FROM Users`
    )
    return results
} 

const queryGetUserByEmail = async (email, password) => {
    const result = await connection.query({
        text: `SELECT email, password FROM Users WHERE email = $1 and password = $2`,
        values: [email, password]
    }) 
    return {...result.rows[0]}  //initial result has form: [{...}]
}

module.exports = {queryAddNewUserToDB, queryGetAllUserInfo, queryGetUserByEmail}