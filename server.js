const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
require("dotenv").config();
const mongo = require("mongodb").MongoClient;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");
const cHeader = require("./components/header");
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

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res){
  if(req.isAuthenticated()){
    cHeader.authorise(true);
  } else {
    cHeader.authorise(false);
  }
  res.render("dashboard", {header: cHeader.render()});
});

app.get("/register", function(req, res){
  var un = req.query.un;
  var pw = req.query.pw;

  bcrypt.genSalt(10, function(err, salt){
    if(err) throw err;
    bcrypt.hash(pw, salt, function(err, hash){
      var collection = database.collection("users");

      collection.insert({
        username: un,
        password: hash
      });

      req.login(d[0]._id, function(err){
        if(err) throw err;
        res.redirect("/");
      });
    });
  });
});

app.get("/login", function(req, res){
  var un = req.query.un;
  var pw = req.query.pw;

  var collection = database.collection("users");
  collection.find({
    username: un
  }).toArray(function(err, d){
    if(err) throw err;

    if(d != ""){
      var hash = d[0].password;
      bcrypt.compare(pw, hash, function(err, resp){
        if(resp){
          req.login(d[0]._id, function(err){
            if(err) throw err;
            res.redirect("/");
          });
        } else {
          res.redirect("/");
        }
      });
    }
  });
});

passport.serializeUser(function(user_id, done){
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done){
  done(null, user_id);
});
