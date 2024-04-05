const path = require("path")
const connection = require(path.join(__dirname,"../config/db.js"))

const queryAddNewUserToDB = async (newUserInfor) => {
    const results = await connection.query({
        text: `INSERT INTO Users (email, user_name, password) VALUES ($1, $2, $3)`,
        values: [...newUserInfor],
    });

    return results;
}

const queryGetAllUserInfo = async () => {
    const results = await connection.query(
        `SELECT * FROM Users`
    )
    return results
} 

module.exports = {queryAddNewUserToDB, queryGetAllUserInfo}