const { Router } = require("express");

const orderRoute = require("./order/orderController");
const orderItemRoute = require("./orderItem/orderItemController");

const router = Router();

router.use((req, res, next) => {
  next();
});

router.use("/order", orderRoute);
router.use("/order_item", orderItemRoute);

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
