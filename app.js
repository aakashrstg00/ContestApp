const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var dbopr = require("./models/dboperations.js");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/contest', function (req, res) {
    res.send("Go to homepage for contest details!");
});
app.get('/profile', function (req, res) {
    if (!req.session.userid) {
        var err = new Error("You are not authorized to be granted access!! Log In or Sign Up for an account.");
        err.status = 403;
        res.send(err);
    }
});
app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/public/register.html');
});
app.post('/register', function (req, res) {
    if (req.body.pass && req.body.userid && req.body.cpass) {
        if (req.body.pass == req.body.cpass) {
            var obj = {
                name: req.body.name
                , email: req.body.email
                , phone: req.body.phone
                , address: req.body.address
                , userid: req.body.userid
                , pass: req.body.pass
            }
            dbopr.addNewUser(obj, res);
            console.log("user created");
        }
        else {
            res.send(" Passwords don't match!! ");
        }
    }
    else {
        res.send(" Enter credentials Properly!! All fields required! ");
    }
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/public/login.html');
});
app.post('/login', function (req, res) {
    if (req.body.userid && req.body.pass) {
        var obj = {
            userid: req.body.userid
            , pass: req.body.pass
        }
        dbopr.getUser(obj, res);
    }
    else {
        res.send("Enter credentials properly!! Username and Password required!");
    }
});
app.listen("3000", function () {
    console.log("server up and running!");
});