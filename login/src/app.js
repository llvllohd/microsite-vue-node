const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));;

// app.get("/", (req, res) => {
  // res.set('Content-Type', 'text/html');
  // res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
  // res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
// });

app.get("/login", (req, res) => {
  // res.set('Content-Type', 'text/html');
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.post("/login", (req, res) => {
  console.warn(req.headers.location);
  console.warn(req.body.name);
  res.status(200).send();
  // res.status(true).send({msg : 'Not found.'});
});

// app.get("/api", (req, res) => {
//   console.warn('INN');
//   res.json({ msg: "I'm Login" });
// });

// app.get("/api/v1/login", async (req, res) => {
//   res.json({ msg: "Hello Asif, I'm IN" });
// });

// app.post("/api/v1/login", async (req, res) => {
//   const book = new Book({ name: req.body.name });
//   const savedBook = await book.save();
//   res.json(savedBook);
// });

module.exports = app;
