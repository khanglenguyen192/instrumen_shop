const express = require("express");
const session = require("express-session");
const store = new session.MemoryStore();
const app = express();

const categoryRoute = require("./routes/category/categoryController");
const paymentRoute = require("./routes/payment/paymentController");
const productsRoute = require("./routes/products/productsController");

const DEFAULT_PORT = process.env.port || 5000;

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
app.use("/payment", paymentRoute);
app.use("/products", productsRoute);

app.listen(DEFAULT_PORT, () => {
  console.log("Server is running on port: " + DEFAULT_PORT);
});
