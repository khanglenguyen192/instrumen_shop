const express = require("express");
const session = require("express-session");
const cors = require('cors');
const store = new session.MemoryStore();
const app = express();

const categoryRoute = require("./routes/category");
const oneProductRoute = require("./routes/one_product");

const DEFAULT_PORT = process.env.port || 5000;
app.use(cors());
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
    store: store,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send(200);
});

app.use("/category", categoryRoute);
app.use("/oneProduct", oneProductRoute);

app.listen(DEFAULT_PORT, () => {
  console.log("Server is running on port: " + DEFAULT_PORT);
});
