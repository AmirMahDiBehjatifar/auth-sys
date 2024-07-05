const { verifyToken } = require("../utils/auth.util");
const { UserModel } = require("../model/user.model")

async function checkAuth(req, res, next) {
    try {
        const authorization = req?.headers?.authorization;
        const [bearer, token] = authorization?.split(" ");
        if (bearer && bearer.toLowerCase() === "bearer") {
            if (token) {
                const verifyResult = verifyToken(token);
                const user = await UserModel.findOne({ email: verifyResult.email });
                req.isAuthenticated = !!user;
                if (!user) throw { status: 401, message: "NOT FOUND USER , authorization failed please login" }
                req.user = {
                    fullName: user.fullname,
                    email: user.email
                }
                return next();
            }
            throw { status: 401, message: "authorization failed please login" }
        }
        throw { status: 401, message: "authorization failed please login" }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkAuth
}