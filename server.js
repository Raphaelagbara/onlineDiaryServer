const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("../server/config/db");
const port = 5000;
const app = express();

//the limit is set to 30mb to help limit sized of images to be parsed.
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to onlineDiary");
});

Promise.all([connectDb])
  .then(() =>
    app.listen(port, () => {
      console.log(`readHub listening on port ${port}`);
    })
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
