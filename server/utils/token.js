const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRECT, {
    expiresIn: "30d",
  });
};
