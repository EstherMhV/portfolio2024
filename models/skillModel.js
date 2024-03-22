import mongoose from 'mongoose';


const skillSchema = new mongoose.Schema({
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
    },

});

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema);