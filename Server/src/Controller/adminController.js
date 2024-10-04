const AdminModel = require("../Models/Admin");
const dbgr = require("debug")("development:Admin");
const jwt = require("jsonwebtoken");
const { compare } = require("bcrypt");
require("dotenv").config();

const maxAge = 1000 * 60 * 60 * 24 * 3;
const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

module.exports.CreateAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await AdminModel.findOne({ email });
    if (user)
      return res.status(400).send("User with the same email already existed");

    const admin = await AdminModel.create({
      username,
      email,
      password,
      admin: true,
    });
    res.send({ admin });
  } catch (error) {
    console.log(error);
    dbgr("Error from (MODELS->AdminRoute) /create");
  }
};

module.exports.LoginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ email });
    if (!user) return res.status(200).send("Invalid email or password.");

    const auth = await compare(password, user.password);
    if (!auth) return res.status(200).send("Invalid email or password.");

    res.cookie(
      "jwt",
      createToken(user.email, user._id, {
        secure: true,
        sameSite: "none",
      })
    );

    res.send({ user });
  } catch (error) {
    console.log(error);
    dbgr("Error from (MODELS->AdminRoute) /login");
  }
};

module.exports.getAdminInfo = async () => {
  try {
  } catch (error) {}
};
