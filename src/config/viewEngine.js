const express = require("express");
const app = express();
const path = require("path");

function configViewEngine(app) {
  app.set("views", path.join("./src", "/views"));
  app.set("view engine", "ejs");

  app.use(express.static(path.join("./src", "/publics")));
}

module.exports = configViewEngine;