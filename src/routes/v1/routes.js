const express = require("express");

const authRoutes = require("../../v1/components/auth/auth.routes");
const userRoutes = require("../../v1/components/users/user.routes");
const taskRoutes = require("../../v1/components/tasks/task.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;