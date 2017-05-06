// require connection.js
// connection.Schema
// new Schema({});
// connection.model("users",userSchema)
// export it
var connection = require("./connection.js");
var Schema = connection.Schema;
var userSchema = new Schema({
    name: {
        type: String
        , required: true
        , trim: true
    }
    , email: {
        type: String
        , required: true
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
    , password: {
        type: String
        , required: true
    }
});
var User = connection.model("users", userSchema);
module.exports = User;