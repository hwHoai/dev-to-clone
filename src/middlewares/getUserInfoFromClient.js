getUserInforFromClient = req => {
	let email = req.body.email;
	let userName = req.body.username;
	let password = req.body.password;
	return {
		email: `${email}`,
		userName: `${userName}`,
		password: `${password}`,
	};
};

module.exports = { getUserInforFromClient };
