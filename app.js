const express=require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const notesRoutes = require("./routes/notesRoutes")
const forumsRoutes = require("./routes/forumsRoutes")
const projectRoutes = require("./routes/projectRoutes")
const usersRoutes = require("./routes/usersRoutes")

const app=express()
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.static('pages'))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to MongoDB..."))
.catch(err=>console.log(err))

app.use("/notes", notesRoutes)
app.use("/forums", forumsRoutes)
app.use("/projects", projectRoutes)
app.use("/users", usersRoutes)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pages/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/pages/login.html')
})

// app.get('/register',(req,res)=>{
//     res.sendFile(__dirname+'/pages/register.html')
// })

app.get('/files',(req,res)=>{
    res.sendFile(__dirname+'/pages/notes.html')
})

app.get('/project',(req,res)=>{
    res.sendFile(__dirname+'/pages/project.html')
})

// app.get('/books',(req,res)=>{
//     res.sendFile(__dirname+'/pages/books.html')
// })

// app.get('/forum',(req,res)=>{
//     res.sendFile(__dirname+'/pages/forum.html')
// })

app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})