var UserSchema = require("./schema.js");
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
            if (!err) {
                response.send("Congratulations!! Registration Successful :) A mail will be sent to your account with more details soon!");
            }
            else {
                response.send("Error in New User Addition (database issue)");
            }
        })
    }
    , getUser: function (userObject, response) {
        UserSchema.findOne({
            userid: userObject.userid
            , password: userObject.password
        }, function (err, user) {
            if (err) {
                response.send("Cannot find User");
            }
            else {
                response.send("Welcome " + user.userid);
                console.log(user);
            }
        })
    }
    , deleteUser: function (userObject, response) {
        UserSchema.findOneAndRemove({
            userid: userObject.userid
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