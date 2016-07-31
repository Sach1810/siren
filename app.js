var express = require('express');
 var bodyParser = require('body-parser');
var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));


//app.get('/', function (req, res) {
//    console.log(req.body);
//    console.log("****between**************************");
//    console.log(res.body);
//    res.send(req.body);
//    
//});

app.post('/', function (req, res) {
    console.log(req.body);
    payload = req.body;
    res.json(req.body);
});


app.listen(8000);
