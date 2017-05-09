const express = require("express");
const bodyParser = require("body-parser");
//const connection = require("./connection.js");
//var db = connection.connection;
let session = require("express-session");
//let MongoStore = require("connect-mongo")(session);
const app = express();
var dbopr = require("./models/dboperations.js");
app.use(express.static('public'));
app.use(session({
    secret: "theflashjgbawwba"
    , resave: true
    , saveUninitialized: false
        /*, store: new MongoStore({
    mongooseConnection: db
})*/
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/contest', function (req, res) {
    res.send("Go to homepage for contest details!");
});
app.get('/profile', function (req, res, next) {
    if (!req.session.userid) {
        var err = new Error();
        err.status = 403;
        err.message = "You are not authorized to be granted access!! Log In or Sign Up for an account."
        res.send(err);
    }
    /*User.findById(req.session.userid).exec(function (error, user) {
    if (error) {
        next(error);
    }
    else {
        //res.render('profile', {
        //    title: 'Profile'
        //    , name: user.name
        //    , favorite: user.favoriteBook
        //});
        res.send("Welcome user ", user.name.fname);
    }
});*/
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
            console.log("add new user called");
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
    if (session) {
        session.userid = userid;
        res.sendFile(__dirname + '/public/login.html');
    }
});
app.post('/login', function (req, res) {
    if (req.body.userid && req.body.pass) {
        var obj = {
            userid: req.body.userid
            , pass: req.body.pass
        }
        dbopr.getUser(obj, res);
        console.log("login user called");
    }
    else {
        res.send("Enter credentials properly!! Username and Password required!");
    }
});
app.listen("3000", function () {
    console.log("server up and running!");
});