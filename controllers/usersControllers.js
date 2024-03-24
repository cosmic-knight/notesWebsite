const { User } = require("../models/usersModel")
const path = require("path")

const getUser = async (req, res) => {
    const username = req.body.username_log
    const password = req.body.password_log
    const user = await User.findOne({ name: username })
    if (!user) { return res.redirect("/login") }

    if (user.password == password) {
        const data = { username: username, position: user.position }
        res.cookie("accesstoken", JSON.stringify(data)).render(path.join(__dirname, "..", "views", "index"), { user: username })
    } else {
        res.redirect("/login")
    }
}

const createUser = async (req, res) => {
    const username = req.body.username_reg
    const email = req.body.email_reg
    const password = req.body.password_reg

    const newUser = new User({
        name: username,
        email: email,
        password: password,
    })

    await newUser.save()
    res.redirect("/")
}

const removeUser = async (req, res) => {
    res.clearCookie("accesstoken").render(path.join(__dirname, "..", "views", "index"), { user: "" })
}

module.exports = { getUser, createUser, removeUser }