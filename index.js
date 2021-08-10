const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/mydb");
var db = mongoose.connection;

db.on("error", () => console.log("Error in database connection"));
db.once("open", () => console.log("Connected to database"));

app.post("/signup", (req, res) => {
  var uname = req.body.uname;
  var email = req.body.email;
  var password = req.body.password;
  var conpassword = req.body.conpassword;

  var data = {
    uname: uname,
    email: email,
    password: password,
    conpassword: conpassword,
  };
  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("User Created Successfully..");
  });

  return res.redirect("index.html");
});

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("index.html");
}),
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
