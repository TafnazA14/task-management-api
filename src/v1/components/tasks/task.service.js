const Task = require("./task.model");

exports.create = async (data, userId) => {
  return await Task.create({ ...data, createdBy: userId });
};

exports.getAll = async (user) => {
  if (user.role === "admin") return Task.find();
  return Task.find({ createdBy: user.id });
};

exports.updateTaskById = async (taskId, user, updateData) => {
  const task = await Task.findById(taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  const isCreator = task.createdBy.toString() === user.id;
  const isAdmin = user.role === "admin";
  const isAssignee =
    task.assignedTo && task.assignedTo.toString() === user.id;

  if (!isCreator && !isAdmin && !isAssignee) {
    throw new Error("Not authorized to update this task");
  }

  if (isAssignee && !isCreator && !isAdmin) {
    if (Object.keys(updateData).length !== 1 || !updateData.status) {
      throw new Error("Assignee can update only task status");
    }
  }

  Object.assign(task, updateData);
  return await task.save();
};

exports.deleteTaskById = async (taskId, user) => {
  const task = await Task.findById(taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  const isCreator = task.createdBy.toString() === user.id;
  const isAdmin = user.role === "admin";

  if (!isCreator && !isAdmin) {
    throw new Error("Not authorized to delete this task");
  }

  await task.deleteOne();
};