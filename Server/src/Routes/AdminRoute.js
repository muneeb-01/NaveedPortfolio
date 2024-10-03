const express = require("express");
const AdminRoute = express.Router();
const { CreateAdmin } = require("../Controller/adminController");

if (process.env.NODE_ENV === "development") {
  AdminRoute.post("/create", CreateAdmin);
}

module.exports = AdminRoute;
