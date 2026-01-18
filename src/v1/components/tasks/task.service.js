const Task = require("./task.model");

exports.create = async (data, userId) => {
  return await Task.create({ ...data, createdBy: userId });
};

exports.getAll = async (user) => {
  if (user.role === "admin") return Task.find();
  return Task.find({ createdBy: user.id });
};
