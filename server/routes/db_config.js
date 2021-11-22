const mysql = require("mysql2");

// const host_name = "us-cdbr-east-04.cleardb.com";
// const db_name = "heroku_6e1565a3fdbcd13";
// const db_user = "b8df0bb549a639";
// const db_password = "1a1822f0";

const host_name = "localhost";
const db_name = "db_bkis";
const db_user = "root";
const db_password = "password";

module.exports = {
  host_name: host_name,
  db_name: db_name,
  db_user: db_user,
  db_password: db_password,
  db: mysql.createConnection({
    host: host_name,
    user: db_user,
    password: db_password,
    database: db_name,
  }),
};
