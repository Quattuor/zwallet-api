const app = require("express").Router();

const welcome = require("./welcome");
const auth = require("./auth");
const userRouter = require("./user");
const history = require('./history');
const contact = require('./contact')

app.use('/history', history);
app.use("/auth", auth);
app.use("/user", userRouter);
app.use("/contact", contact)
app.use("/", welcome);

module.exports = app;
