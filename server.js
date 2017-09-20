const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "pug");

app.get("/", function(req, res){
  res.send("<h1>Meep!</h1>");
});

app.listen(port, function(){
  console.log("Server Listening on Port: " + port);
});
