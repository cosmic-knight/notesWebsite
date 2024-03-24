const express = require("express")
const { getBook, addBook } = require("../controllers/booksControllers")
const { upload } = require("../utils/uploads")

const router = express.Router()

router.get("/", getBook)
router.post("/add-book", upload.single("image"), addBook)

module.exports = router