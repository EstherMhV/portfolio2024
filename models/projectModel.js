const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    stacks: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Project', projectSchema);