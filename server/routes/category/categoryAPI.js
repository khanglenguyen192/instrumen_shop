const { Router } = require("express");
const connection = require("../db_config");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    connection.db.query(
      `SELECT * FROM ${connection.db_name}.category;`,
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
