const About = require('../models/AboutModel');
const jwt = require('jsonwebtoken');


exports.listAllAbout = async function (req, res) {
    try {
        const about = await About.find({});
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }
}

exports.createAbout = async function (req, res) {
    try {
        const about = new About(req.body);
        await about.save();
        res.status(201).json(about);
    } catch (error) {
        res.status(500).json({ message: "Erreur server response" });
        console.log(error);
    }

}

exports.updateAbout = async (req, res) =>{
    try {
        const about = await About.findByIdAndUpdate(req.params.id_about,req.body, {new : true});
        res.status(201);
        res.json(about);
    }
    catch (error) {
        res.status(500).json({message:"Error server response"});
        console.log(error);
    }
}

exports.deleteAbout = async (req, res) =>{
    try {
        const about = await About.findByIdAndDelete(req.params.id_about);
        res.status(201);
        res.json({message:"about deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message:"Erreur server response"});
        console.log(error);
    }
}

exports.getAbout = async (req, res) => {
    try{
        const about = await About.findById(req.params.id_about);
        res.status(201);
        res.json(about);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({message:"Erreur serveur"});
    }
}

