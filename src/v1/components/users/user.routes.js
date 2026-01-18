const express = require("express");
const auth = require("../../../middleware/auth.middleware");
const role = require("../../../middleware/role.middleware");
const controller = require("./user.controller");

const router = express.Router();

router.get("/", auth, role("admin"), controller.getAllUsers);
router.delete("/:id", auth, role("admin"), controller.deleteUser);

module.exports = router;
