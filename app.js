var express = require('express');
 var bodyParser = require('body-parser');
var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

var payload;


app.post('/', function (req, res) {
    // console.log(req.body);
    payload = req.body;
    json.parse(payload);
    console.log(payload);
//    res.json(req.body);
});

app.get('/', function (req, res) {
    res.send(payload);
});

app.listen(8000);
