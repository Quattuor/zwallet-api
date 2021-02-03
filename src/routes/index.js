const app = require("express").Router();

const welcome = require("./welcome");
const auth = require("./auth");
const userRouter = require("./user");

app.use("/", welcome);
app.use("/auth", auth);
app.use("/user", userRouter);

module.exports = app;
