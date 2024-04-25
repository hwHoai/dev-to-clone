const bcrypt = require("bcrypt");
const saltRounds = 10;

class HashPw {
  hashPass(password) {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  }

  compareHashedPass(password, hash) {
    const result = bcrypt.compareSync(password, hash);
    return result;
  }
}

module.exports = new HashPw();
