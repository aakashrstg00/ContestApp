var UserSchema = require("./schema.js");
/*
var bcrypt = require("bcrypt");


bcrypt.compare(myPlaintextPassword, hash, function(err, res) {});




    bcrypt.hash(user.pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.pass = hash;
        next();
    });


*/
var dbOperations = {
    addNewUser: function (userObject, response) {
        var userObject = new UserSchema({
            name: userObject.name
            , email: userObject.email
            , phone: userObject.phone
            , address: userObject.address
            , userid: userObject.userid
            , pass: userObject.pass
        });
        userObject.save(function (err) {
            if (err) {
                console.log(err.errmsg);
                response.send(err.errmsg);
            }
            else {
                response.send("Mubarak Ho!! Aapke ghar naya account hua hai!");
            }
        });
    }
    , getUser: function (userObject, response) {
        /*
        console.log(userObject.pass);
         bcrypt.hash(userObject.pass, 10, function (err, hash) {
             if (!err) {
                 userObject.pass = hash;
             }
         });
        var salt = bcrypt.genSaltSync(10);
        userObject.pass = bcrypt.hashSync(userObject.pass, salt);
        console.log(userObject.pass); */
        UserSchema.find({
            userid: userObject.userid
            , pass: userObject.pass
        }, function (err, user) {
            if (err) {
                console.log(err.errmsg);
                response.send(err.errmsg);
            }
            else {
                if (user[0]) {
                    response.send("Welcome " + user[0].name.fname);
                }
                else {
                    response.send("Invalid Username or Password");
                }
            }
        })
    }
    , deleteUser: function (userObject, response) {
        UserSchema.findOneAndRemove({
            userid: userObject.userid
            , pass: userObject.pass
        }, function (err) {
            if (err) {
                response.send("Can't delete the user");
            }
            else {
                response.send("User Information Deleted Succesfully...");
            }
        })
    }
    , updateUser: function (userObject, response) {
        UserSchema.findOneAndUpdate({
            userid: userObject.userid
            , pass: userObject.pass
        }, {
            $set: {
                userid: 'amit'
                , password: '123'
            }
        }, function (err) {
            if (err) {
                response.send("Can't Update the User Data");
            }
            else {
                response.send("User Information Updated Succesfully...");
            }
        })
    }
}
module.exports = dbOperations;