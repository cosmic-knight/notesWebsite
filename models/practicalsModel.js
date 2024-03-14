const mongoose = require("mongoose")

const practicalSchema = new mongoose.Schema({
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
    stream: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true,
    })

const Practical = mongoose.model("practicals", practicalSchema)

module.exports = { Practical }