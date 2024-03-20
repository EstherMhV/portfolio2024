const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    level: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    image: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Skill', skillSchema);