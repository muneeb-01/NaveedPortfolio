const mongoose = require("mongoose");
require("dotenv").config();
const dbgr = require("debug")("development:mongoose");

const uri =
  process.env.MONGOOSE_URI || "mongodb://localhost:27017/NaveedPortfolio"; // Fallback to local

mongoose
  .connect(uri)
  .then(() => {
    dbgr("Mongoose connected from app.js");
  })
  .catch((error) => {
    console.error("Mongoose connection error:", error);
    dbgr("Mongoose connection error");
  });

module.exports = mongoose.connection;
