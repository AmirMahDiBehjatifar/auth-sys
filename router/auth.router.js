const { Router } = require("express");
const { register, login } = require("../controller/auth.controller");
const router = Router();

router.post("/register", register);

router.get("/login", login);

module.exports = router