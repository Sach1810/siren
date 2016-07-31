var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (request, response) {
  response.send("You are inside the fullstack project")
});

//app.get('/hooks', function (req, res) {
//    console.log(req);
//    console.log(res);
//    res.send("hi");
//});

app.listen(8000);
