const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    notesUrl: {
        type: String,
        required: true,
    },
    practicalUrl: {
        type: String,
        required: true,
    },
    referenceUrl: {
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

const Notes = mongoose.model("notes", notesSchema)

module.exports = { Notes }