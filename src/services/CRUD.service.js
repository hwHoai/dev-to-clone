// const express = require("express");
// const app = express();


const connection = require("../config/db.js")

const creatUser = async (req,res) => {
    let email = req.body.email;
    let userName = req.body.username;
    let password = req.body.password;
    
    const results = await connection.query({
        text: `INSERT INTO Users (email, user_name, password) VALUES ($1, $2, $3)`,
        values: [email, userName, password],
    })
    res.send('Create User succeeded!!')

}

const getFullUsers = async () => {
    const results = await connection.query(
        `select * from Users`
    )
    console.log(results.rows)
}

module.exports = {getFullUsers, creatUser}