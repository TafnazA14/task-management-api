const taskService = require("./task.service");

exports.createTask = async (req, res) => {
  const task = await taskService.create(req.body, req.user.id);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await taskService.getAll(req.user);
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTaskById(
      req.params.id,
      req.user,
      req.body
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await taskService.deleteTaskById(req.params.id, req.user);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};