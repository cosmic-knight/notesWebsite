const { Project } = require("../models/projectsModel")

const getProjects = (req, res) => {
    // res.json({message: "get projects"})
    res.redirect("/project")
}

const getSingleProject = (req, res) => {
    const id = req.params.id
    res.json({ message: "get Single Project", id: id })
}

const addProject = async (req, res) => {
    const { name, url, desc, technology } = req.body;

    const newProject = Project({
        name: name,
        url: url,
        description: desc,
        technology: technology,
    })

    await newProject.save()

    res.redirect("/add_data?form=project")
}

module.exports = { getProjects, getSingleProject, addProject }