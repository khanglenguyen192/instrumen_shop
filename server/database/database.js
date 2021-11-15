const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "db_bkis",
// });

const host_name = "us-cdbr-east-04.cleardb.com";
const db_name = "heroku_6e1565a3fdbcd13";
const db_user = "b8df0bb549a639";
const db_password = "1a1822f0";

const connection = mysql.createConnection({
  host: host_name,
  user: db_user,
  password: db_password,
  database: db_name,
});

module.export = connection;
