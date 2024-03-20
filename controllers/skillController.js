const Skill = require('../models/skillModel');
const jwt = require('jsonwebtoken');


exports.listAllSkills = async function (req, res) {
    try {
        const users = await Skill.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }
}

exports.createASkill = async function (req, res) {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }

}

exports.updateASkill = async (req, res) =>{
    try {
        const user = await Skill.findByIdAndUpdate(req.params.id_skill,req.body, {new : true});
        res.status(201);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({message:"Error server response"});
        console.log(error);
    }
}

exports.deleteASkill = async (req, res) =>{
    try {
        const user = await Skill.findByIdAndDelete(req.params.id_skill);
        res.status(201);
        res.json({message:"User deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Erreur server response"});
        console.log(error);
    }
}

exports.getAUser = async (req, res) => {
    try{
        const skill = await Skill.findById(req.params.id_skill);
        res.status(201);
        res.json(user);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({message:"Erreur serveur"});
    }
}
