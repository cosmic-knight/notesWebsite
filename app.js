const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const path = require("path")
const mongoose = require("mongoose")

const userRoute = require("./routes/usersRoutes")
const booksRoute = require("./routes/booksRoutes")
const notesRoute = require("./routes/notesRoutes")
const projectRoute = require("./routes/projectRoutes")
const { Book } = require("./models/booksModel")
const { Notes } = require("./models/notesModel")
const { Project } = require("./models/projectsModel")

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static("pages"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/users", userRoute)
app.use("/books-data", booksRoute)
app.use("/notes-data", notesRoute)
app.use("/project-data", projectRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    let data = req.cookies?.accesstoken && JSON.parse(req.cookies?.accesstoken)
    let user = data?.username
    if (!user) {
        user = ""
    }
    res.render("index", { user: user })
})

app.get("/login", (req, res) => {
    res.render("login", {})
})

app.get("/books", async (req, res) => {
    let data = req.cookies?.accesstoken && JSON.parse(req.cookies?.accesstoken)
    let user = data?.username
    let position = data?.position
    let bookName = req.query.name || ""
    if (!user) {
        user = ""
    }
    let bookdata = await Book.find({
        ...(bookName && { "name": { "$regex": bookName, "$options": "i" } }),
    })

    res.render("books", { user: user, position: position, bookdata })
})

app.get("/notes", async (req, res) => {
    let data = req.cookies?.accesstoken && JSON.parse(req.cookies?.accesstoken)
    let user = data?.username
    let position = data?.position
    let stream = req.query.stream || ""
    let notesdata = {}
    if (!user) {
        user = ""
    }
    if (stream) {
        notesdata.fy = await Notes.find({
            ...(stream && { stream: stream }),
            year: "fy",
        })
        notesdata.sy = await Notes.find({
            ...(stream && { stream: stream }),
            year: "sy",
        })
        notesdata.ty = await Notes.find({
            ...(stream && { stream: stream }),
            year: "ty",
        })
    }
    res.render("notes", { user: user, position: position, notesdata: notesdata })
})

app.get("/projects", async (req, res) => {
    let data = req.cookies?.accesstoken && JSON.parse(req.cookies?.accesstoken)
    let user = data?.username
    let position = data?.position
    let technology = req.query.technology || ""
    let projectdata = {}
    if (!user) {
        user = ""
    }

    projectdata = await Project.find({
        ...(technology && { technology: technology }),
    })

    res.render("project", { user: user, position: position, projectdata: projectdata })
})

app.get("/add_data", (req, res) => {
    const form = req.query.form
    let data = req.cookies?.accesstoken && JSON.parse(req.cookies?.accesstoken)
    let user = data?.username
    if (!user) {
        user = ""
    }
    res.render("adding_page", { user: user, form: form })
})

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
})