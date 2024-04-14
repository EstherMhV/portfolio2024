import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MOngoDb!");

  } catch (e) {
    console.log(e);
  }
}




