const app = require("express").Router();

const welcome = require("./welcome");
const auth = require("./auth");
const userRouter = require("./user");
const history = require('./history');

app.use('/history', history);
app.use("/auth", auth);
app.use("/user", userRouter);
app.use("/", welcome);

module.exports = app;
