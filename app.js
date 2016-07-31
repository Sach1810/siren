var express = require('express');
var bodyParser = require('body-parser');
var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

var circleData;


app.post('/', function (req, res) {
    // console.log(req.body);
    circleData = req.body;
    console.log(circleData);
});

app.get('/', function (req, res) {
    res.send(circleData);
    console.log(circleData);
});

app.listen(8000);
