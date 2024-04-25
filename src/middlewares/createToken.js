const crypto = require("crypto");
const base64url = require("../config/base64url");
const jwtSecret =
  "b/7V+HX9VcmFPvi74m6XsPp5QWrpIcOSUlCJeBsoW3mQya4eFna276XmhZSYy6xoVWlxB8jUwElmf/m0mpjdJ2hVch+Gyt2/rHKgs7ZaPvPZJRDnsyxP4Joxkonmwyp3Z/7JeSN/j14/BLn+05g4NkVUErzZWK6Fb0mMkI9Bz0K3Jn1krzh4aXY4FzWbXefC8PhBW18KDUqDUgp+fb2qHTRinNhhn4V+PtvkyCEHJRUYTEeCXG8LGnZ51+fSNbEtTIO41xJ/CVPRnG9M5bZdUFaMrysE+Z62iRWkyFAvxnzTPXJGWZISm4q/BznXlcff4Hv1x0JqoZPBDnEagoQXEw==";

class CreateToken {
  creatsignature(encodedHeader, encodedPayload) {
    const tokenData = `${encodedHeader}.${encodedPayload}`;
    const hmac = crypto.createHmac("sha256", jwtSecret);
    const signature = hmac.update(tokenData).digest("base64url");
    return signature;
  }

  createLoginToken(userID) {
    const header = {
      alg: "HS256",
      typ: "JWT",
    };
    const payload = {
      subj: userID,
    };
    const encodedHeader = base64url(JSON.stringify(header));
    const encodedPayload = base64url(JSON.stringify(payload));
    const signature = creatsignature(encodedHeader, encodedPayload);
    return { token: `${encodedHeader}.${encodedPayload}.${signature}` };
  }

  isTokenValid(req, res) {
    const reqToken = req.headers.authorization?.slice(7);
    if (!reqToken) {
      return false;
    }
    const [header, payload, tokenSignature] = reqToken.split(".");
    const reqSignature = creatsignature(header, payload);
    return reqSignature === tokenSignature;
    // console.log(signature, tokenSignature, signature === tokenSignature);
  }
}

module.exports = new CreateToken();
