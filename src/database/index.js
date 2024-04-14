import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://esthermehal:lioCYN54miK5xjJt@cluster0.pk2nysd.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}




