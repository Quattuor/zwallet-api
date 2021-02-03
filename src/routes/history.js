const app = require("express").Router();

const {
  Transfer,
  Subscription,
  Topup,
  AllInstanceUser,
  AllTransactionUser,
} = require("../controller/history");

app.post("/transfer", Transfer);
app.post("/subscription", Subscription);
app.post("/topup", Topup);
app.get("/users/", AllTransactionUser);
app.get("/instance/", AllInstanceUser);

module.exports = app;
