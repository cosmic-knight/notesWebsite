const express = require("express")
const {getProjects, getSingleProject} = require("../controllers/projectControllers")

const router = express.Router()

router.get("/", getProjects)
router.get("/:id", getSingleProject)

module.exports = router