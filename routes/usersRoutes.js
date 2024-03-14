const express = require("express")
const {getUser, createUser} = require("../controllers/usersControllers")

const router = express.Router()

router.post("/login", getUser)
router.post("/register", createUser)

module.exports = router