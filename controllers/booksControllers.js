const { Book } = require("../models/booksModel")

const getBook = async (req, res) => {
    const name = req.query.name
    const books = await Book.find({
        ...(name && { "name": { "$regex": name, "$options": "i" } })
    })
    res.json({ booksData: books })
}

const addBook = async (req, res) => {
    const { name, author, url, tag } = req.body
    const newBook = Book({
        name: name,
        author: author,
        url: url,
        img: `upload_images/${req.file.filename}`,
        tags: tag,
    })
    await newBook.save()
    res.redirect("/add_data?form=book")
}

module.exports = { getBook, addBook }