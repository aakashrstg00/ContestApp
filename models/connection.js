var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/contest");
module.exports = mongoose;