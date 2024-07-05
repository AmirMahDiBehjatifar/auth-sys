const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Secret = "8805c061392ad6867dda84390e61319c";
function hashPass(key) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(key, salt);
}

function verifyPass(key, hashkey) {
    return bcrypt.compareSync(key, hashkey);
}
function signToken(payload) {
    return jwt.sign(payload, Secret)
}
function verifyToken(token) {
    return jwt.verify(token, Secret)
}
module.exports = {
    hashPass,
    verifyPass,
    signToken,
    verifyToken
}