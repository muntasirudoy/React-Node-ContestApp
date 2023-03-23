const { getUser, createUser } = require("../Controler/userController");
const { matchPassword } = require("../utils/encrypt.js");
const { generateToken } = require("../utils/token.js");

exports.signUpController = async (req, res) => {
  const { email, password, name, role } = req.body;
  const userFromDB = await getUser(email);

  if (userFromDB !== null)
    return res.status(409).json({ message: "User already registered!" });

  await createUser(email, password, name, role);
  res.status(201).json({ message: "User Created Succesfully!" });
};

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  const userFromDB = await getUser(email);

  if (userFromDB == null) {
    res.status(409).json({ message: "Incorrect Email!" });
    return;
  }

  if (userFromDB.password !== password) {
    res.status(409).json({ message: "Incorrect Password!" });
    return;
  }

  let loginUser = {
    id: userFromDB.id,
    email: userFromDB.email,
    name: userFromDB.name,
    role: userFromDB.role,
  };
  res.status(200).json(loginUser);
};
