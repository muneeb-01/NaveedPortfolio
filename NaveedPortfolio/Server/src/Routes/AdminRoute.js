const express = require("express");
const AdminRoute = express.Router();
const { verifytoken } = require("../middlewares/auth-middleware");
const {
  CreateAdmin,
  LoginAdmin,
  getAdminInfo,
  LogoutAdmin,
  handleFalseAdminCreation,
} = require("../Controller/adminController");

<<<<<<< HEAD
=======
console.log(process.env.NODE_ENV);

>>>>>>> e504340 (updated repository using laptop)
if (process.env.NODE_ENV === "development") {
  AdminRoute.post("/create", CreateAdmin);
} else {
  AdminRoute.post("/create", handleFalseAdminCreation);
}

AdminRoute.post("/login", LoginAdmin);
AdminRoute.get("/adminInfo", verifytoken, getAdminInfo);
AdminRoute.get("/Logout", verifytoken, LogoutAdmin);

module.exports = AdminRoute;
