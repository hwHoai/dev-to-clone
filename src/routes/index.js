const siteRouter = require("../routes/siteRouter");
const userRouter = require("../routes/userRouter")
require("../routes/siteRouter")
function route(app) {
    app.use("/user", userRouter);
    app.use("/", siteRouter);
}

module.exports = route