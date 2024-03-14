const express = require("express")
const {getForums, getSingleForum} = require("../controllers/forumsControllers")

const router = express.Router()

router.get("/", getForums)
router.get("/:id", getSingleForum)

module.exports = router