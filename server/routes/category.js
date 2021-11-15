const { Router } = require("express");
// const db = require("../database/database");// ko import connect tu file database.js dc, chua ro nguyen do

const mysql = require("mysql2");
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "db_bkis",
// });

const host_name = "us-cdbr-east-04.cleardb.com";
const db_name = "heroku_6e1565a3fdbcd13";
const db_user = "b8df0bb549a639";
const db_password = "1a1822f0";

const db = mysql.createConnection({
  host: host_name,
  user: db_user,
  password: db_password,
  database: db_name,
});

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  console.log("HERE");
  try {
    db.query(`SELECT * FROM ${db_name}.category;`, (err, results, fields) => {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      const categories = results;
      res.status(200).send(categories);
    });
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

module.exports = router;
