const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let aboutSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('About', aboutSchema);