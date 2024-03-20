const Project = require('../models/projectlModel');
const jwt = require('jsonwebtoken');


exports.listAllProjects = async function (req, res) {
    try {
        const users = await Skill.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }
}

exports.createAProject = async function (req, res) {
    try {
        const skill = new Project(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }

}

exports.updateAProject = async (req, res) =>{
    try {
        const project = await Skill.findByIdAndUpdate(req.params.id_project,req.body, {new : true});
        res.status(201);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({message:"Error server response"});
        console.log(error);
    }
}

exports.deleteAProject = async (req, res) =>{
    try {
        const project = await Project.findByIdAndDelete(req.params.id_project);
        res.status(201);
        res.json({message:"Project deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Erreur server response"});
        console.log(error);
    }
}

exports.getAProject = async (req, res) => {
    try{
        const project = await Project.findById(req.params.id_skill);
        res.status(201);
        res.json(user);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({message:"Erreur serveur"});
    }
}
