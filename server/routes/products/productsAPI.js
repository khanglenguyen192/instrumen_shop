const { Router } = require("express");
const router = Router();
const connection = require("../db_config");
const feedbackRoute = require("./feedback/feedbackAPI");
const detailRoute = require("./detail/detailAPI");

router.use("/feedback", feedbackRoute);
router.use("/detail", detailRoute);

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    connection.db.query(
      `SELECT * FROM ${connection.db_name}.product;`,
      (err, results, fields) => {
        // results contains rows returned by server
        // fields contains extra meta data about results, if available
        const products = results;
        res.status(200).send(products);
      }
    );
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

router.get("/category", async (req, res) => {
  const category = req.query.category;
  const query = `SELECT * FROM ${connection.db_name}.product WHERE category = ?`;
  try {
    connection.db.query(query, [category], (err, results) => {
      res.status(200).send(results);
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
});

router.post("/", async (req, res) => {
  res.send(200);
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
