import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
    {
        name: String,
        level: {
            type: Number,
            min: 1,
            max: 5
        },
        image: String
    },
    { timestamps: true }
);

const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);

export default Skill;