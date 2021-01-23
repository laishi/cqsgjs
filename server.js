var express = require("express");
var app = express();


app.use(express.static(__dirname + '/gald'));


app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.listen(9898);

console.log("http://148.70.212.82:9898/");