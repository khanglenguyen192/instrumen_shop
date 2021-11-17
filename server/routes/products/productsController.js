const { Router } = require("express");
const router = Router();

const feedbackRoute = require("./feedback/feedbackController");
const detailRoute = require("./detail/detailController");

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
