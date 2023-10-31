const express = require("express");

const EducationController = require("../controllers/EducationController");


const router = express.Router();

router.post("/", EducationController.addEducation);
router.get("/:educationId", EducationController.getOneEducation);
router.get("/", EducationController.getAllEducations);
router.delete("/:educationId", EducationController.deleteEducation);
router.put("/:educationId", EducationController.updateEducation);

module.exports = router;
