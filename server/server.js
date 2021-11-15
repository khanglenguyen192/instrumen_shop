const express = require("express");
const session = require("express-session");
const cors = require('cors');
const store = new session.MemoryStore();
const app = express();

const categoryRoute = require("./routes/category");
const oneProdcutRoute = require("./routes/one-product");

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
app.use("/one-product", oneProdcutRoute);

const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_bkis",
});

app.get("/api/one-product/details", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const query = `SELECT * FROM product WHERE id = ?`;
  
  try {
      db.query(query, [id], (err, results) => {
      res.status(200).send(results);
      console.log('send respponse');
  });}
   catch (err) {
  console.log("ERROR: " + err);
  res.send("FAILED");
}
});

app.listen(DEFAULT_PORT, () => {
  console.log("Server is running on port: " + DEFAULT_PORT);
});
