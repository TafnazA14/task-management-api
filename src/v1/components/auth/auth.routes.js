const express = require("express");
const { register, login } = require("./auth.controller");
const { registerValidator, loginValidator } = require("./auth.validator");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

module.exports = router;