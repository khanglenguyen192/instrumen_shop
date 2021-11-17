const { Router } = require("express");
const router = Router();

const similarProductsRoute = require("./similarProducts/similarProductsAPI");
const trendingProductsRoute = require("./trendingProducts/trendingProductsAPI");

router.use("/similar", similarProductsRoute);
router.use("/trending", trendingProductsRoute);

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  res.send(200);
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
