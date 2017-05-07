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
            if (err) {
                response.send(err);
            }
            else {
                response.send("Mubarak Ho!! Aapke ghar naya account hua hai!");
            }
        });
    }
    , getUser: function (userObject, response) {
        UserSchema.find({
            userid: userObject.userid
            , password: userObject.password
        }, function (err, user) {
            if (err) {
                response.send(err);
            }
            else {
                if (user[0]) {
                    response.send("Welcome " + user[0].name.fname);
                    console.log(user);
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