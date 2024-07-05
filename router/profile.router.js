const { Router } = require("express");
const { getProfile } = require("../controller/profile.controller");
const router = Router();

router.get("/login", getProfile);

module.exports = router