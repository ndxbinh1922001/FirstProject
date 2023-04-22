const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

//init middleware
app.use(morgan("combined")); // hiển thị log khi có req
app.use(helmet()); // cơ chế bảo mật tránh attacker
app.use(compression()); // nén gói tin trong quá trình truyền

//dotenv config
dotenv.config();

//connect DB
require("./dbs/init.mongodb");

//routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    mess: "Dashboard",
  });
});

//handle error

module.exports = app;
