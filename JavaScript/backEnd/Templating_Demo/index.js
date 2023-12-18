const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/cats", (req, res) => {
  const cats = [
    "Whiskers",
    "Mittens",
    "Shadow",
    "Luna",
    "Simba",
    "Oreo",
    "Cleo",
    "Tiger",
    "Chloe",
    "Oliver",
  ];
  res.render("cats.ejs", { cats: cats });
});

app.use("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 10;
  console.log(num);
  res.render("random.ejs", { num: num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit.ejs", { ...data });
  } else {
    res.render("notFound.ejs", { subreddit: subreddit });
  }
});

app.get("*", (req, res) => {
  res.send("<h1> this is 404 error </h1>");
});
app.listen(3000, () => {
  console.log("YOU'RE LISTENING TO PORT 3000!!!");
});
