const { Router } = require("express");
const connection = require("../../db_config");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const id = req.query.id;
  const query =  `SELECT * FROM ${connection.db_name}.feedback WHERE productID = ?;`

  connection.db.query(query, [id], (err, results) => {
      if (err) {
        console.log(err);
        res.send("FAILED");
      } else {
        res.status(200).send(results);
      }
    }
    );
});

router.post("/", async (req, res) => {
  const productID = req.query.productID;
  const customer_name = req.query.customer_name;
  const customer_email = req.query.customer_email;
  const detail = req.query.detail;
  const time = req.query.time;
  const query = `INSERT INTO feedback (productID, customer_name, customer_email, detail, time) VALUES (?,?,?,?,?);`;

  connection.db.query(query, [productID, customer_name, customer_email, detail, time], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
