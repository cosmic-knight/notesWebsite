const express = require("express")
const { getNotes, getSingleNote, addNote } = require("../controllers/notesControllers")

const router = express.Router()

router.get("/:stream", getNotes)
router.get("/:id", getSingleNote)
router.post("/add-note", addNote)

module.exports = router