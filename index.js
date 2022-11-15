const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("data.json");
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selected = news.filter((ns) => ns.category_id == id);
  res.send(selected);
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("dragon news api running on port: ", port);
});
