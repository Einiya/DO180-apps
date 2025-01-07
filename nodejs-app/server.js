const createError = require("html-errors"); 
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  const hostname = process.env.HOSTNAME || "localhost";
  res.send(`Hello World from pod: ${hostname}\n`);
});
const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

