const express = require("express")
const { getUser, createUser, removeUser } = require("../controllers/usersControllers")

const router = express.Router()

router.post("/login", getUser)
router.get("/logout", removeUser)
router.post("/register", createUser)

module.exports = router