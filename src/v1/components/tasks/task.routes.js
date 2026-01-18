const express = require("express");
const auth = require("../../../middleware/auth.middleware");
const controller = require("./task.controller");
const { createTaskValidator } = require("./task.validator");

const router = express.Router();
router.post("/", auth, createTaskValidator, controller.createTask);
router.post("/", auth, controller.createTask);
router.get("/", auth, controller.getTasks);
router.put("/:id", auth, controller.updateTask);
router.delete("/:id", auth, controller.deleteTask);

module.exports = router;