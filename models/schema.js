// require connection.js
// connection.Schema
// new Schema({});
// connection.model("users",userSchema)
// export it
var connection = require("./connection.js");
/*
var bcrypt = require("bcrypt");
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.pass = hash;
        next();
    });
});
*/
var Schema = connection.Schema;
var userSchema = new Schema({
    name: {
        type: Object
        , required: true
        , trim: true
    }
    , email: {
        type: String
        , required: true
        , unique: true
        , trim: true
    }
    , phone: {
        type: Number
        , required: true
        , trim: true
    }
    , userid: {
        type: String
        , required: true
        , unique: true
        , trim: true
    }
    , pass: {
        type: String
        , required: true
    }
});
var User = connection.model("users", userSchema);
module.exports = User;