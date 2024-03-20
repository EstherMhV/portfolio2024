const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let educationSchema = new Schema({
    degree: {
        type: String,
        required: true,
        unique: true,
    },
    period: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Education', educationSchema);