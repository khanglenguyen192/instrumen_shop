const { Router } = require("express");
const connection = require("../../db_config");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const id = req.query.id;
  const query =  `SELECT * FROM ${connection.db_name}.feedback WHERE productID = ?;`
  try {
    connection.db.query(query, [id], (err, results) => {
        res.status(200).send(results);
      }
    );
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
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
