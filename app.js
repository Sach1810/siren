var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
    console.log(req.body);
    console.log("****between**************************");
    console.log(res.body);
    res.send(req.body);
    
});

app.get('/hooks', function (req, res) {
    res.send(req.body);
    console.log(req.body);
    console.log("****between**************************");
    console.log(res.body);
});

app.listen(8000);
