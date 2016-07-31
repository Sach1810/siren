var express = require('express');
var bodyParser = require('body-parser');
var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

var payload;
//var payload;


app.post('/', function (req, res) {
    // console.log(req.body);
    payload = req.body;
    console.log(payload);
});

app.get('/', function (req, res) {
    res.send(payload);
    console.log(payload);
});

app.listen(8000);
