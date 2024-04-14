import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MOngoDb!");
    } catch(error){
        console.log("Couldn't connect to MongoDB!");
    }
};

export default connectMongoDB;