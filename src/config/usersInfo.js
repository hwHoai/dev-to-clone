const configUserInfo = (newUserInfor) => {
    const {email, userName, password} = newUserInfor
    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {
            "message" : "Email Invalid",
            "status" : false 
        }
    }
    // Password require at least 6 character, 1 Uppercase, one digit
    if (!(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))) {
        return {
            "message" : "Password Invalid",
            "status" : false
        }
    }

    return {"status" : true}
}

module.exports = configUserInfo