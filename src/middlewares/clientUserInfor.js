const { queryGetAllUserInfo } = require("./queryDB");
class ClientUserInfor {
  getUserInforFromClient = (req) => {
    let email = req.body.email;
    let userName = req.body.username;
    let password = req.body.password;
    return {
      email: `${email}`,
      userName: `${userName}`,
      password: `${password}`,
    };
  };

  dbGetFullUsers = async () => {
    return queryGetAllUserInfo();
  };
}

module.exports = new ClientUserInfor();
