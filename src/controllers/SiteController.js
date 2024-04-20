class SiteController {
    homepage(req, res) {
        res.render("homepage.ejs");
    }
    signUpPage(req, res) {
        res.render("signUpPage.ejs")
    }

    logInPage(req,res) {
        res.render("logInPage.ejs")
    }
}

module.exports = new SiteController