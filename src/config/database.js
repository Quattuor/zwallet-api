const mySql = require('mysql');

const {
  MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DATABASE,
} = process.env;

const db = mySql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DATABASE,
});

db.connect(() => {
  console.log('succses connect to database');
});

module.exports = {
  db,
};
