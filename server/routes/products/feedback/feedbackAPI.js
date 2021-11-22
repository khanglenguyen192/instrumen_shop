const { Router } = require("express");
const connection = require("../../db_config");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const id = req.query.id;
  // const query = `SELECT * FROM ${connection.db_name}.feedback`;
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
  const productID = req.query.productID;
  const customer_name = req.query.customer_name;
  const customer_email = req.query.customer_email;
  const detail = req.query.detail;
  // const feedbackID = req.query.feedbackID;
  const time = req.query.time;

  connection.db.query(
    "INSERT INTO feedback (productID, customer_name, customer_email, detail, time) VALUES (?,?,?,?,?)",
    [productID, customer_name, customer_email, detail, time],
    (err, result) => {
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
