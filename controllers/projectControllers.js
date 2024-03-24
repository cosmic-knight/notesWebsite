const getProjects = (req, res) => {
    // res.json({message: "get projects"})
    res.redirect("/project")
}

const getSingleProject = (req, res) => {
    const id = req.params.id
    res.json({ message: "get Single Project", id: id })
}

const addProject = async (req, res) => {
    console.log(req.body)
    res.redirect("/add_data")
}

module.exports = { getProjects, getSingleProject, addProject }