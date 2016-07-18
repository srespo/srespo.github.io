var express = require("express");
var app = express();

var carPrice;
var carColor;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("");
});

app.get("/set_price", function(req, res){
    console.log(req.query.price);
    carPrice = req.query.price;
      
app.get("/set_color", function(req, res){
	console.log(req.query.color);
	carPrice = req.query.color;
});

app.get("/retrieve_price",("/retreive_color") function(req, res){
    res.send("The car price is: " + carPrice + ", and the color is " + carColor + ".");
});


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});