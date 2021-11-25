const { Router } = require("express");
const router = Router();
const express = require("express");
const connection = require("../../db_config");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use((req, res, next) => {
  next();
});

const similarProductsRoute = require("./similarProducts/similarProductsAPI");
const trendingProductsRoute = require("./trendingProducts/trendingProductsAPI");

router.use("/similar", similarProductsRoute);
router.use("/trending", trendingProductsRoute);

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM ${connection.db_name}.product WHERE id = ?`;
  try {
    connection.db.query(query, [id], (err, results) => {
      res.status(200).send(results);
    });
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

router.get("/max_id", async (req, res) => {
  const query = `SELECT MAX(id) as maxId FROM ${connection.db_name}.product`;
  try {
    connection.db.query(query, (err, results) => {
      res.status(200).send(results[0]);
    });
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

router.post("/", async (req, res) => {
  var query = `INSERT INTO ${connection.db_name}.product (id, name, img, origin, brand, price, style, category, material, size, weight, accessories, insurance) VALUES 
    ("${req.body.id}", "${req.body.name}", "${req.body.img}", "${req.body.origin}", "${req.body.brand}", "${req.body.price}", "${req.body.style}", ${req.body.category}, "${req.body.material}", "${req.body.size}", ${req.body.weight}, "${req.body.accessories}", "${req.body.insurance}");`;
  try {
    connection.db.query(query, (err, results) => {
      res.status(200).send(req.body);
    });
  } catch (err) {
    console.log("ERROR: " + err);
  }
});

router.put("/", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const img = req.body.img;
  const origin = req.body.origin;
  const brand = req.body.brand;
  const price = req.body.price;
  const style = req.body.style;
  const category = req.body.category;
  const material = req.body.material;
  const size = req.body.size;
  const weight = req.body.weight;
  const accessories = req.body.accessories;
  const insurance = req.body.insurance;

  const query = `UPDATE ${connection.db_name}.product
  SET name = ?, img = ?, origin = ?, brand = ?, price = ?, style = ?, category = ?, material = ?, size = ?, weight = ?, accessories = ?, insurance = ?
  WHERE id = ?;`

  connection.db.query(query,
    [name, img, origin, brand, price, style, category, material, size, weight, accessories, insurance, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('Updated products');
      }
    }
  );
});

router.delete("/", async (req, res) => {
  const id = req.query.id;
  const query = `DELETE FROM ${connection.db_name}.product WHERE id = ?`;
  try {
    connection.db.query(query, [id], (err, results) => {
      res.status(200).send("OK");
    });
  } catch (err) {
    console.log("ERROR: " + err);
    res.send("FAILED");
  }
});

module.exports = router;
