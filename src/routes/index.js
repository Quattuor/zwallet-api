const app = require("express").Router();

const welcome = require("./welcome");
const userRouter = require("./user");

app.use("/", welcome);
app.use("/user", userRouter);

module.exports = app;
