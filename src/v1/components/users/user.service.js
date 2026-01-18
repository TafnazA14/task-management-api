const User = require("./user.model");

exports.getAllUsers = async () => {
  return await User.find().select("-password");
};

exports.deleteUserById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

exports.updateUserRole = async (userId, role) => {
  return await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select("-password");
};