const AdminModel = require("../Models/Admin");
const dbgr = require("debug")("development:Admin");

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
    dbgr("Error from (MODELS->AdminRoute) /create/admin");
  }
};
