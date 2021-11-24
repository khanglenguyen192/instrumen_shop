const { Router } = require("express");
const connection = require("../../../db_config");
const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const category = req.query.category;
  const style = req.query.style;
  const material = req.query.material;
  const query =  `SELECT * FROM ${connection.db_name}.product WHERE category = ? AND style = ? AND material = ?;`

  connection.db.query(query, [category, style, material], (err, results) => {
      if (err) {
        console.log(err);
        res.send("FAILED");
      } else {
        res.status(200).send(results);
        console.log('send data');
      }
    }
    );
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
