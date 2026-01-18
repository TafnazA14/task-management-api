const taskService = require("./task.service");

exports.createTask = async (req, res) => {
  const task = await taskService.create(req.body, req.user.id);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await taskService.getAll(req.user);
  res.json(tasks);
};
