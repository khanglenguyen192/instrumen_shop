const { Router } = require("express");
const connection = require("../../../db_config");
const router = Router();

router.use((req, res, next) => {
  next();
});

const fetchData = (query, res) => {
  connection.db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.send("FAILED");
    } else {
      res.status(200).send(results);
    }
  }
  );
}

router.get("/piano", async (req, res) => {
  const query =  `SELECT * FROM ${connection.db_name}.product WHERE category = 1 LIMIT 15;`
  fetchData(query, res);
});

router.get("/guitar", async (req, res) => {
  const query =  `SELECT * FROM ${connection.db_name}.product WHERE category = 3 LIMIT 15;`
  fetchData(query,res);
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
