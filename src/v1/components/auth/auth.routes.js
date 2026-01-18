const express = require("express");

const {
  register,
  login,
  refreshToken,
} = require("./auth.controller");

const {
  registerValidator,
  loginValidator,
  refreshTokenValidator,
} = require("./auth.validator");

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.post("/refresh", refreshTokenValidator, refreshToken);

module.exports = router;