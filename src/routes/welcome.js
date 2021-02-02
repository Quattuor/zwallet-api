const app = require("express").Router();
const form = require("../helper/form");

app.all("*", (req, res) => {
  form.error(
    res,
    "endpoint not found, u must read postman documentation",
    "WRONG ENDPOINT",
    404
  );
});

module.exports = app;
