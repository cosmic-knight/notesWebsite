const getNotes = (req, res)=>{
    // res.json({message: "get Notes"})
    res.redirect("/files")
}

const getSingleNote = (req, res)=>{
    const id = req.params.id
    // res.json({message: "get Single Note", id: id})
    res.redirect("/files")
}

module.exports = {getNotes, getSingleNote}