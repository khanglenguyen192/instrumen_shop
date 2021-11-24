const { Router } = require("express");
const express = require("express");

const router = Router();
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use((req, res, next) => {
  next();
});

const connection = require("../../db_config");

router.get("/", async (req, res) => {
  var query = `SELECT * FROM ${connection.db_name}.order_item WHERE orderID = ${req.query.ID};`;
  try {
    connection.db.query(query, (err, results) => {
      const order_item = results;
      res.status(200).send(order_item);
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
});
router.post("/", async (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    var query = `INSERT INTO ${connection.db_name}.order_item (orderID,productID,quantity) VALUES ((SELECT MAX(orderID) FROM ${connection.db_name}.order), ${req.body[i].props.id}, ${req.body[i].props.amount});`;
    try {
      connection.db.query(query, (err, results) => {
        console.log("Sent order-item");
      });
    } catch (err) {
      console.log("ERROR: " + err);
    }
  }
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
