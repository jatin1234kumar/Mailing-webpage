const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/mail.html');
});

app.post('/', function (req, res) {
    var fName = req.body.Fname;
    var lName = req.body.Lname;
    var email = req.body.Email;
    console.log(fName, lName, email);
})

app.listen(2000, function () {
    console.log("server is running on port 2000.");
});


// a4deaee7ca4cfb31d9040f3d5666cf3b-us12
