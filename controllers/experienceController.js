const Experience = require('../models/experienceModel');



exports.listAllExperiences = async function (req, res) {
    try {
        const experience = await Experience.find({});
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }
}

exports.createAnExperience = async function (req, res) {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }

}

exports.updateAnExperience = async (req, res) =>{
    try {
        const experience = await Skill.findByIdAndUpdate(req.params.id_experience,req.body, {new : true});
        res.status(201);
        res.json(experience);
    }
    catch (error) {
        res.status(500).json({message:"Error server response"});
        console.log(error);
    }
}

exports.deleteAnExperience = async (req, res) =>{
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id_experience);
        res.status(201);
        res.json({message:"Experience deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Erreur server response"});
        console.log(error);
    }
}

exports.getAnExperience = async (req, res) => {
    try{
        const experience = await Experience.findById(req.params.id_experience);
        res.status(201);
        res.json(experience);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({message:"Erreur serveur"});
    }
}


