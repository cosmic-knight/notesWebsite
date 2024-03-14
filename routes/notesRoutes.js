const express = require("express")
const {getNotes, getSingleNote} = require("../controllers/notesControllers")

const router = express.Router()

router.get("/:stream", getNotes)
router.get("/:id", getSingleNote)

module.exports = router