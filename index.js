require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bp = require("body-parser");

const { PORT } = process.env;

const routes = require("./src/routes/index");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bp.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
