const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },

},
    {
        timestamps: true,
    })

const Book = mongoose.model("books", bookSchema)

module.exports = { Book }