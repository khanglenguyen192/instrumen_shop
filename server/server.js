const express = require("express");
const app = express();

const DEFAULT_PORT = 5000;

app.get("/", (req, res) => {
  res.send(200);
});

app.listen(DEFAULT_PORT, () => {
  console.log("Server is running on port " + DEFAULT_PORT);
});
