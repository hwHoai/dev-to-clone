const configUserInfo = require('../config/usersInfo.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/model.user.js');
const { isUserInforValid } = require('../middlewares/validateUser.js');
const { getUserInforFromClient } = require('../middlewares/getUserInfoFromClient.js');

const signup = async (req, res) => {
	const { ...newUserInfor } = await getUserInforFromClient(req);
	if (await isUserInforValid(newUserInfor)) {
		newUserInfor.password = bcrypt.hashSync(
			newUserInfor.password,
			saltRounds,
		);
		await User.creatUser(newUserInfor);
		return res.json({
			message: 'Create User succeeded!!',
			email: `${newUserInfor.email}`,
			userName: `${newUserInfor.userName}`,
			password: `${newUserInfor.password}`,
		});
	} else {
		return res.json(await configUserInfo(newUserInfor));
	}
};

module.exports = signup;
