const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, minLength: 8 },
}, {
    timestamps: true
})

const UserModel = mongoose.model("user", UserSchema, "users");

module.exports = {
    UserModel
}