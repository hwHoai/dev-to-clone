const { isTokenValid } = require('../middlewares/createToken');
const connection = require('../config/db');


class User {
	constructor(name, email, password) {
		this.name = name, 
        this.email = email, 
        this.password = password;
	}

	getuserProfile = async (req, res) => {
		try {
			if (!isTokenValid(req, res)) {
				return res.json({
					message: 'Unauthorized',
				});
			}
			const token = req.headers.authorization.slice(7);
			const [header, payload, signature] = token.split('.');
			const payloadDatas = JSON.parse(atob(payload));
			const user = await dbUserInforByID(payloadDatas.subj);
			return res.json(user);
		} catch (e) {
			console.log(e);
		}
	};

	getUserInforByEmail = async email => {
		const result = await connection.query({
			text: `SELECT * FROM Users WHERE email = $1`,
			values: [email],
		});

		return result.rows[0]; //initial result has form: [{...}]
	};

	getUserInforByID = async userID => {
		const result = await connection.query({
			text: `SELECT * FROM Users WHERE userid = $1`,
			values: [userID],
		});
		return result.rows[0];
	};

	getUserInforByUserName = async userName => {
		const result = await connection.query({
			text: `SELECT * FROM Users WHERE user_name = $1`,
			values: [userName],
		});

		return result.rows[0]; //initial result has form: [{...}]
	};

	creatUser = async newUserInfor => {
		const newUser = new User(
			newUserInfor.userName,
			newUserInfor.email,
			newUserInfor.password,
		);

		const results = await connection.query({
			text: `INSERT INTO Users (email, user_name, password) VALUES ($1, $2, $3)`,
			values: [newUser.email, newUser.name, newUser.password],
		});

		return results;
	};
}

module.exports = new User();
