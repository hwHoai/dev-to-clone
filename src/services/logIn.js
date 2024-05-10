const User = require('../models/model.user.js');
const bcrypt = require('bcrypt');
const { createLoginToken } = require('../middlewares/createToken.js');
const {	getUserInforFromClient } = require('../middlewares/getUserInfoFromClient.js');

const logIn = async (req, res) => {
	const { email, password } = await getUserInforFromClient(req);
	const user = await User.getUserInforByEmail(email);
	if (!user) {
		return res.json({
			message: 'User is not exist',
		});
	}
	if (!bcrypt.compareSync(password, user.password)) {
		return res.json({
			message: 'Password is incorrect',
		});
	}

	const token = await createLoginToken(user.userid);
	res.json(token);
};

module.exports = logIn;
