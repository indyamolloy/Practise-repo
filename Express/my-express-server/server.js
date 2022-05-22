import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/about", (req, res) => {
  res.send("I`m Indya");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
