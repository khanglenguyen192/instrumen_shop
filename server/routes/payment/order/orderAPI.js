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
  var query = `SELECT * FROM ${connection.db_name}.order;`;
  try {
    connection.db.query(query, (err, results) => {
      const order = results;
      for(let i = 0; i < results.length; i++){
        results[i].status = results[i].status.toString();
      }
      res.status(200).send(order);
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
});

router.post("/", async (req, res) => {
  var dia_chi = `${req.body.Duong}, ${req.body.Phuong}, ${req.body.Quan}, ${req.body.Tinh}`;
  var query = `INSERT INTO ${connection.db_name}.order (customerName,customerPhone,customerEmail,customerAddress,detail,paymentMethod,status) 
  VALUES ("${req.body.HoTen}","${req.body.SDT}","${req.body.Email}","${dia_chi}","${req.body.GhiChu}", "Tiền mặt", current_date());`;
  try {
    connection.db.query(query, (err, results) => {
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
  res.end();
});

router.put("/", async (req, res) => {
  res.send(200);
});

router.delete("/", async (req, res) => {
  res.send(200);
});

module.exports = router;
