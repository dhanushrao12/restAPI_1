const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("We are on the Homepage");
});
app.use("/posts", postsRoute);

//Connect to dB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to db");
});

//How do we listen to the server
app.listen(3000);
