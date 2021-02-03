require("dotenv").config();
const {io, server, app, express, socketConnect} = require('./src/helper/socket');
const logger = require("morgan");
const cors = require("cors");
const bp = require("body-parser");

const { PORT } = process.env;

const routes = require("./src/routes/index");

app.use(express.static("public"));
app.use(cors());
app.use(bp.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/", routes);

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

socketConnect(io)
