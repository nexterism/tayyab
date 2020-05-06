const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const Getdata = require("./models/getpostdata");
app.use(cors());
const config = require("./config/key");
app.use(express.static(path.resolve(__dirname, "../dist")));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
// mongoose
//   .connect(
//     "mongodb://Flash:1234@flash-shard-00-00-tkc35.mongodb.net:27017,flash-shard-00-01-tkc35.mongodb.net:27017,flash-shard-00-02-tkc35.mongodb.net:27017/flash?ssl=true&replicaSet=Flash-shard-0&authSource=admin&retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true
//     }
//   )
//   .then(() => {
//     console.log("db run");
//   });

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    // res.send("<h1>Heeloo</h1>")
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
}

app.get("/postdata", (req, res) => {
  Getdata.find().then((resp) => {
    res.json(resp);
  });
});

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server run");
});
