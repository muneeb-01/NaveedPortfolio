const express = require("express");
const AdminRoute = express.Router();
const {
  CreateAdmin,
  LoginAdmin,
  getAdminInfo,
} = require("../Controller/adminController");

if (process.env.NODE_ENV === "development") {
  AdminRoute.post("/create", CreateAdmin);
}

AdminRoute.post("/login", LoginAdmin);
AdminRoute.post("/adminInfo", getAdminInfo);

module.exports = AdminRoute;
