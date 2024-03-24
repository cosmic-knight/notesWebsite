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
    console.log(req.body)
    res.redirect("/add_data")
}

module.exports = { getNotes, getSingleNote, addNote }