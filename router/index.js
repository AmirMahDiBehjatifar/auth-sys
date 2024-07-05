const { Router } = require("express");
const router = Router();
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");
const { checkAuth } = require("../middlewares/checkAuth");

router.use("/auth", authRouter)
router.use("/user", checkAuth, profileRouter)

router.use("/", (req, res, next) => {
    res.send("homepage")
});

module.exports = router;