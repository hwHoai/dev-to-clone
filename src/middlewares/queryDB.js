const path = require('path');
const connection = require('../config/db');

class QueryDB {
    dbCreatUser = async newUserInfor => {
        const [email, userName, password] = [
            newUserInfor.email,
            newUserInfor.userName,
            newUserInfor.password,
        ];

        const results = await connection.query({
            text: `INSERT INTO Users (email, user_name, password) VALUES ($1, $2, $3)`,
            values: [email, userName, password],
        });

        return results;
    };

    dbAllUserInfor = async () => {
        const results = await connection.query(`SELECT * FROM Users`);
        return results;
    };

    dbUserInforByEmail = async email => {
        const result = await connection.query({
            text: `SELECT * FROM Users WHERE email = $1`,
            values: [email],
        });

        return result.rows[0]; //initial result has form: [{...}]
    };

    dbUserInforByUserName = async userName => {
        const result = await connection.query({
            text: `SELECT * FROM Users WHERE user_name = $1`,
            values: [userName],
        });

        return result.rows[0]; //initial result has form: [{...}]
    };

    dbUserInforByID = async userID => {
        const result = await connection.query({
            text: `SELECT * FROM Users WHERE userid = $1`,
            values: [userID],
        });
        return result.rows[0];
    };
}

module.exports = new QueryDB();
