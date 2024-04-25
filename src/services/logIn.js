const { getUserInforFromClient } = require("../middlewares/clientUserInfor.js");
const { dbUserInforByEmail } = require("../middlewares/queryDB.js");
const { createLoginToken } = require("../middlewares/createToken.js");
const { compareHashedPass } = require("../middlewares/hashPw.js");

const logIn = async (req, res) => {
  const { email, password } = await getUserInforFromClient(req);
  const user = await dbUserInforByEmail(email);
  if (!user) {
    return res.json({
      message: "User is not exist",
    });
  }
  if (!compareHashedPass(password, user.password)) {
    return res.json({
      message: "Password is incorrect",
    });
  }

  const token = createLoginToken(user.userid);
  res.json(token);
};

module.exports = logIn;
