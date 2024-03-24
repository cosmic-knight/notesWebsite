const express = require("express")
const { getBook, addBook } = require("../controllers/booksControllers")

const router = express.Router()

router.get("/", getBook)
router.post("/add-book", addBook)

module.exports = router