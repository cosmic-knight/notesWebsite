const express = require("express")
const { getProjects, getSingleProject, addProject } = require("../controllers/projectControllers")

const router = express.Router()

router.get("/", getProjects)
router.get("/:id", getSingleProject)
router.post("/add-project", addProject)

module.exports = router