var bcrypt = require("bcrypt");
var text = process.argv[2];
console.log("hey " + text);
bcrypt.hash(text, 10, function (err, hash) {
    if (err) {
        console.error("error");
    }
    else {
        console.log("new : " + hash);
    }
});