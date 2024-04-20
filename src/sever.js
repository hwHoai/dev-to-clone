const express = require("express");
const app = express();

require("dotenv").config();
require("./config/viewEngine");

const configViewEngine = require("./config/viewEngine");

const port = process.env.PORT;
const route = require("./routes/index")
// const webRoute = require("./routes/web");
const path = require("path");


app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.static(path.join("./src", "/publics")));


configViewEngine(app);

route(app);
// app.use("/", webRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
