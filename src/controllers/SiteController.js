class SiteController {

  homepage(req, res) {
    if (!req.query.login) {
      res.render("homepage.ejs");
    }
    res.render('loggedinhomepage.ejs')
  }
  signUpPage(req, res) {
    res.render("signUpPage.ejs");
  }

  logInPage(req, res) {
    res.render("logInPage.ejs");
  }
  
}

module.exports = new SiteController();
