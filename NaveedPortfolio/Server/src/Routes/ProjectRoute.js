const express = require("express");
const ProjectRoute = express.Router();
const {
  AddProjectInfo,
  GetProjectInfo,
  AddProjectImages,
<<<<<<< HEAD
=======
  GetProjectInfoById
  ,GetlatestProjects
>>>>>>> e504340 (updated repository using laptop)
} = require("../Controller/ProjectController");
const { uploadMultiple } = require("../config/multer-connection");
const { verifytoken } = require("../middlewares/auth-middleware");

ProjectRoute.post(
  "/AddProjectImages",
  verifytoken,
  uploadMultiple,
  AddProjectImages
);
ProjectRoute.post("/AddProjectInfo", verifytoken, AddProjectInfo);
ProjectRoute.get("/GetProjectInfo", GetProjectInfo);
<<<<<<< HEAD
=======
ProjectRoute.get("/GetProjectById/:id", GetProjectInfoById);
ProjectRoute.get("/GetLatestProjects", GetlatestProjects)
>>>>>>> e504340 (updated repository using laptop)

module.exports = ProjectRoute;
