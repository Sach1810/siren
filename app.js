var express = require('express');
var bodyParser = require('body-parser');
var say = require('say');
var app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

// var circleData;


app.post('/', function (req, res) {
    circleData = req.body;
    console.log(circleData);
    console.log("***************************************");
    console.log(circleData.payload.status);

    if (circleData.payload.status === 'success'){
        console.log("YEAH BUDDY!");
        say.speak(circleData.payload.committer_name + circleData.payload.subject);
    };


    res.json(circleData);
});

app.get('/', function (req, res) {
    res.send(circleData);
//    console.log(circleData);
});

app.listen(8000);
