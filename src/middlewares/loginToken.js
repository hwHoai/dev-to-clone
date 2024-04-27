const {queryGetUserID} = require("../models/queryDB")
const crypto = require("crypto")
const base64url = require("../config/base64urlconfig")

async function createLoginToken(email, userName) {
    const userID = await queryGetUserID(email, userName)
    const jwtSecret = "UTC5tuiyTf01HPyRJ0wCSSAqY9pHHAKuw1+A2y0sGrr0D6OQiVZKWN0czutaCWYE9CWZiJA6rjifwnlc97CRk9neUVCwqyJI4j11JOj4rn/JcAh+BIqAhbnPi6PopXOSK3hvCPCryLDZ4hZ3RjcumNkikI+0W7/mGFA7jgIaf16rsSErlpC6Zx+5Q7f2e300cHSM1A5zKhThogTt2qHca52/vI0PyKE6NoI6rKFbsqr87GJIz/AUTrHSOn4BUQoXMMiHqd4hwcqXavDYY9Bj0hIVSI6NPmngUSOb/JP4rnVtQ56LP9qzWeG+Ncl3mtzL0D39q9o80y874Lj2BwQMPg=="
    const header = {
        "alg": "HS256",
        "typ": "JWT",
    }
    const payload  = {
        "sub": userID
    }
    
    const encodedHeader = base64url(JSON.stringify(header));
    const encodedPayload = base64url(JSON.stringify(payload));
    const tokenData = `${encodedHeader}.${encodedPayload}`;
    const hmac = crypto.createHmac("sha256", jwtSecret);
    const signature = hmac.update(tokenData).digest("base64url");
    return{
        token: `${tokenData}.${signature}`
    }
}

module.exports = createLoginToken

