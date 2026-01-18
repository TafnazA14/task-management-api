exports.createTaskValidator = (req, res, next) => {
  const { title, status, priority } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Task title is required",
    });
  }

  const allowedStatus = ["pending", "completed"];
  const allowedPriority = ["low", "medium", "high"];

  if (status && !allowedStatus.includes(status)) {
    return res.status(400).json({
      message: "Invalid task status",
    });
  }

  if (priority && !allowedPriority.includes(priority)) {
    return res.status(400).json({
      message: "Invalid task priority",
    });
  }

  next();
};