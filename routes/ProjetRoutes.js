const express = require("express");

const ProjectController = require("../controllers/ProjectController");
const uploadMulter = require("../middlewares/multer");


const router = express.Router();

router.post(
  "/",
    uploadMulter.single("projectImage"),
  ProjectController.addProject
);
router.get("/:projectId", ProjectController.getOneProject);
router.get("/", ProjectController.getAllProjects);
router.delete("/:projectId", ProjectController.deleteProject);
router.put(
  "/:projectId",
    uploadMulter.single("projectImage"),
  ProjectController.updateProject
);

module.exports = router;
