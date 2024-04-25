const {
  dbUserInforByEmail,
  dbUserInforByUserName,
} = require("../middlewares/queryDB");
const configUserInfo = async (newUserInfor) => {
  const { email, userName, password } = newUserInfor;
  
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return {
      message: "Email Invalid",
      status: false,
    };
  }

  // Password require at least 6 character, 1 Uppercase, one digit
  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    return {
      message: "Password Invalid",
      status: false,
    };
  }

  const isEmailExisted = await dbUserInforByEmail(email);
  const isUserNameExisted = await dbUserInforByUserName(userName);
  if (isEmailExisted) {
    return {
      message: "Email Exist",
      status: false,
    };
  }
  if (isUserNameExisted) {
    return {
      message: "username Exist",
      status: false,
    };
  }
  return { status: true };
};

module.exports = configUserInfo;
