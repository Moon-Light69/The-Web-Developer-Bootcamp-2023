const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we have new request");
//  res.send({
//     name: "mohammad givi ghobadi",
//     userName: "moonLight69",
//     age: "30",
//   });
//  res.send("<h1>hi from express<h1>");
// });

app.get("/ehsan", (req, res) => {
  console.log("we have new request");
  res.send("<h1> Best developer in world <h1>");
});

app.post("/ehsan", (req, res) => {
  console.log("we have new request");
  res.send("this is post of LOCALHOST/EHSAN");
});

app.get("/", (req, res) => {
  console.log("we have new request");
  res.send("<h1>welcome to home page<h1>");
});

app.get("/r/:sub", (req, res) => {
  console.log(req.params);
  const { sub } = req.params;
  res.send(`<h1>Browsing ${sub}<h1>`);
});

app.get("/r/:sub/:pageID", (req, res) => {
  console.log(req.params);
  const { sub, pageID } = req.params;
  res.send(`<h1>Browsing ${sub} and page ID${pageID}<h1>`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("nothing searching");
  }
  res.send(`<h1> searching for your q${q}<h1>`);
});

app.get("*", (req, res) => {
  console.log("we have new request");
  res.send(`<h1 style = "red">404 PAGE NOT FOUND<h1>`);
});

app.listen(3002, () => {
  console.log("Listen on port 3002!!!");
});
