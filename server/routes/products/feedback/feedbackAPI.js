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
  const productID = req.body.productID;
  const customer_name = req.body.customer_name;
  const customer_email = req.body.customer_email;
  const detail = req.body.detail;
  const time = req.body.time;
  const rating = req.body.rating;
  const query = `INSERT INTO feedback (productID, customer_name, customer_email, detail, time, rating) VALUES (?,?,?,?,?,?);`;

  connection.db.query(query, [productID, customer_name, customer_email, detail, time, rating], (err, result) => {
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
