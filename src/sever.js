require("dotenv").config();
require("./config/viewEngine");

const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const port = process.env.PORT;
const webRoute = require("./routes/web");


configViewEngine(app);

app.use("/", webRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
