const { Router } = require("express");
// const db = require("../database/database");// ko import connect tu file database.js dc, chua ro nguyen do

const mysql = require("mysql2");

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

router.get("/", (req, res) => {
  res.send(200);
});

router.get("/api/one-product/details", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const query = `SELECT * FROM ${db_name}.product WHERE id = ?`;

  try {
    db.query(query, [id], (err, results) => {
      res.status(200).send(results);
      console.log("send respponse");
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
});

module.exports = router;
