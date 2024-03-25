const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technology: {
        type: [String],
        required: true,
    },

},
    {
        timestamps: true,
    })

const Project = mongoose.model("projects", projectSchema)

module.exports = { Project }