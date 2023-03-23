const { randomBytes, scryptSync } = require("crypto");

const encryptPassowrd = (password, salt) => {
  return scryptSync(password, salt, 32).toString("hex");
};

exports.hashPassword = (password) => {
  const salt = randomBytes(16).toString("hex");
  return encryptPassowrd(password, salt) + salt;
};

exports.matchPassword = (passowrd, hash) => {
  const salt = hash.slice(64);
  const originalPassHash = passowrd;
  const currentPassHash = passowrd;
  return originalPassHash === currentPassHash;
};
