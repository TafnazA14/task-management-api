exports.userIdValidator = (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: "User ID is required",
    });
  }
  next();
};

exports.updateRoleValidator = (req, res, next) => {
  const { role } = req.body;

  if (!role || !["user", "admin"].includes(role)) {
    return res.status(400).json({
      message: "Role must be either 'user' or 'admin'",
    });
  }

  next();
};