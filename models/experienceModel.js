const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    company: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },

    stacks: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Project', projectSchema);