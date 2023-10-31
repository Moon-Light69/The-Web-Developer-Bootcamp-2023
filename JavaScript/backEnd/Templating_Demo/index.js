const express = require("express");
const app = express();

app.set("view engin", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("YOU'RE LISTENING TO PORT 3000!!!");
});
