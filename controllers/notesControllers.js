const { Notes } = require("../models/notesModel")

const getNotes = (req, res) => {
    // res.json({message: "get Notes"})
    res.redirect("/files")
}

const getSingleNote = (req, res) => {
    const id = req.params.id
    // res.json({message: "get Single Note", id: id})
    res.redirect("/files")
}

const addNote = async (req, res) => {
    const { name, notesUrl, practicalUrl, referenceUrl, stream, year } = req.body
    const newNote = Notes({
        name: name,
        notesUrl: notesUrl,
        practicalUrl: practicalUrl,
        referenceUrl: referenceUrl,
        stream: stream,
        year: year,
    })
    await newNote.save();
    res.redirect("/add_data?form=note")
}

module.exports = { getNotes, getSingleNote, addNote }