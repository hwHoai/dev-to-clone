const { getUserInforFromClient } = require("../middlewares/clientUserInfor.js");
const { dbCreatUser } = require("../middlewares/queryDB.js");
const { isUserInforValid } = require("../middlewares/validateUser.js");
const configUserInfo = require("../config/usersInfo.js");
const { hashPass } = require("../middlewares/hashPw.js");

const signup = async (req, res) => {
  const { ...newUserInfor } = await getUserInforFromClient(req);
  if ( await isUserInforValid(newUserInfor)) {

    newUserInfor.password = hashPass(newUserInfor.password);
    await dbCreatUser(newUserInfor);
    return res.json({
      message: "Create User succeeded!!",
      email: `${newUserInfor.email}`,
      userName: `${newUserInfor.userName}`,
      password: `${newUserInfor.password}`,
    });

  } else {

    return res.json(await configUserInfo(newUserInfor));
    
  }
};

module.exports = signup;
