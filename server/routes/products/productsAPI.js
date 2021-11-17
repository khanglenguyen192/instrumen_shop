const { Router } = require("express");
const router = Router();

const feedbackRoute = require("./feedback/feedbackAPI");
const detailRoute = require("./detail/detailAPI");

router.use("/feedback", feedbackRoute);
router.use("/detail", detailRoute);

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
