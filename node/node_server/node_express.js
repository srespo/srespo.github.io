var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World im here!');
});
app.get('/', function (req, res) {
  res.send('Hello World im leaving!');
});

app.get('/', function (req, res) {
  res.send('Hello World im leaving!');
});

app.get('/shira', function (req, res) {
	var responseText="";

	responseText += "did you know?";
	responseText += "no you didnt";

  res.send(responseText);
  console.log('i just told them');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});