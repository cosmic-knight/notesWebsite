const {User} = require("../models/usersModel")

const getUser = (req, res)=>{
    res.json({message: "login"})
}

const createUser = async (req, res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const newUser = new User({
        name: username,
        email: email,
        password: password,
    })

    await newUser.save()
    res.redirect("/")
}

module.exports = {getUser, createUser}