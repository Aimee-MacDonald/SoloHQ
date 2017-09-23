const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
require("dotenv").config();
const mongo = require("mongodb").MongoClient;

var database;

console.log("Connecting..");
mongo.connect(process.env.DBURL, function(err, db){
  if(err) throw err;

  database = db;
  app.listen(port, function(){
    console.log("Server Listening on Port: " + port);
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "static")));

app.get("/", function(req, res){
  res.render("dashboard");
});
