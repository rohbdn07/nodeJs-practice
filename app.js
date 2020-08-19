const express = require("express");
const path = require("path");

const filename = path.join(__filename);
const basename = path.basename(filename);

console.log(filename);
console.log(basename);

const app = express();

app.get("/", function (req, res) {
  res.send("hello world my dear");
});

app.route("/student").get(function (req, res) {
  res.send("Welcome back mr mohit");
});

app.route("/student/:id").get(function (req, res) {
  const id = req.params.id;
  if (id > 10) {
    res.send("Hey Rohit" + id);
  } else {
    res.send("Hey Mohit" + id);
  }
});
// app.route('/Student').get(function (req, res) {
//     res.send('Welcome Rohit, you are learning well');
// });
app.listen(3001, function (req, res) {
  console.log("running...");
});
