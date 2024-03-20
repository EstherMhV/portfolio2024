const Education = require('../models/educationModel');
const jwt = require('jsonwebtoken');


exports.listAllEducation = async function (req, res) {
    try {
        const education = await Education.find({});
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }
}

exports.createEducation = async function (req, res) {
    try {
        const education = new Education(req.body);
        await education.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }

}

exports.updateAnEducation = async (req, res) =>{
    try {
        const education = await Skill.findByIdAndUpdate(req.params.id_education,req.body, {new : true});
        res.status(201);
        res.json(education);
    }
    catch (error) {
        res.status(500).json({message:"Error server response"});
        console.log(error);
    }
}

exports.deleteAnEducation = async (req, res) =>{
    try {
        const education = await Skill.findByIdAndDelete(req.params.id_education);
        res.status(201);
        res.json({message:"Education deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Erreur server response"});
        console.log(error);
    }
}

exports.getAnEducation = async (req, res) => {
    try{
        const education = await Education.findById(req.params.id_education);
        res.status(201);
        res.json(education);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({message:"Erreur serveur"});
    }
}


