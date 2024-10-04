const ProjectModel = require("../Models/Projectsmodel");

module.exports.AddProjectImages = async (req, res) => {
  try {
    const { userId } = req;

    if (!userId) res.status(202).send("Unauthorized user");

    const files = req?.files;
    const fileUrl = files.map((file) => {
      return `/uploads/projects/${file.filename}`;
    });
    if (fileUrl.length == 0)
      return res.status(202).send("Unable to upload files.");

    res.status(200).send("files uploaded successfully.");
  } catch (error) {}
};

module.exports.AddProjectInfo = async (req, res) => {
  try {
    const { userId } = req;
    if (!userId) return res.status(202).send("Unauthenticated User.");
    const { Type, description, imagesUrl, title, client, category } = req.body;

    const Project = await ProjectModel.create({
      Type,
      description,
      imagesUrl,
      title,
      client,
      category,
    });

    res.status(200).json({ Project });
  } catch (error) {}
};

module.exports.GetProjectInfo = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json({ projects });
  } catch (error) {}
};
