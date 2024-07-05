const { UserModel } = require("../model/user.model");
const { hashPass, verifyPass, signToken } = require("../utils/auth.util");

async function register(req, res, next) {
    try {
        const { fullname, email, password } = req.body;
        const user = await UserModel.create({
            fullname,
            email,
            password: hashPass(password)
        })
        res.send(user);
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user) throw { status: 401, message: "USER NOT FOUND" };
    console.log(user.password);
    console.log(password);
    if (verifyPass(password, user.password)) {
        // Sign token
        const token = signToken({ id: user._id, email: user.email });
        res.json({ token, message: "Login Successfully" })
    } else {
        // reject request
        throw {
            status: 401,
            message: "password is wrong"
        }
    }

}

module.exports = {
    register,
    login
}