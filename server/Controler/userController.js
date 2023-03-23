const User = require("../Models/userModel.js");
const { hashPassword } = require("../utils/encrypt.js");

exports.getUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

exports.createUser = async (email, password, name, role) => {
  const userObject = {
    email,
    name,
    password,
    role,
  };
  const user = new User(userObject);
  console.log();
  return await user.save();
};
