const bcrypt = require("bcryptjs");
const User = require("../users/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../../utils/jwt");
exports.register = async ({ name, email, password }) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  return { message: "User registered" };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  return {
    token: generateAccessToken({ id: user._id, role: user.role }),
    refreshToken: generateRefreshToken({ id: user._id }),
    user: { id: user._id, email: user.email, role: user.role },
  };
};
