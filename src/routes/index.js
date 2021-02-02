const app = require("express").Router();

const welcome = require("./welcome");
const auth = require("./auth");

app.use("/", welcome);
app.use("/auth", auth);

module.exports = app;
