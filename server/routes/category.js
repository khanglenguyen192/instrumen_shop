const { Router } = require("express");
// const db = require("../database/database");// ko import connect tu file database.js dc, chua ro nguyen do

const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "db_bkis",
});

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    const categories = db.query(
      `SELECT * FROM db_bkis.category;`,
      (err, results, fields) => {
        // results contains rows returned by server
        // fields contains extra meta data about results, if available
        const categories = results;
        res.status(200).send(categories);
      }
    );
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

module.exports = router;
