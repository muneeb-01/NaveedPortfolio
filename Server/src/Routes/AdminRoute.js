const express = require("express");
const AdminRoute = express.Router();
const { verifytoken } = require("../middlewares/auth-middleware");
const {
  CreateAdmin,
  LoginAdmin,
  getAdminInfo,
  LogoutAdmin,
} = require("../Controller/adminController");

if (process.env.NODE_ENV === "development") {
  AdminRoute.post("/create", CreateAdmin);
}
AdminRoute.post("/login", LoginAdmin);
AdminRoute.get("/adminInfo", verifytoken, getAdminInfo);
AdminRoute.get("/Logout", verifytoken, LogoutAdmin);

module.exports = AdminRoute;
