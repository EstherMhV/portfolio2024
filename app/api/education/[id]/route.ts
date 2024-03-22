import connectMongoDB from "@/libs/mongodb"
import Education from "@/models/educationModel";
import { NextResponse } from "next/server";

export async function PUT(request: any, {params}: any){
    const {id} = params;
    const {newDegree : degree, newPeriod : period , newDescription : description, newImage: image} = request.json();
    await connectMongoDB();
    await Education.findByIdAndUpdate(id,{ degree,period, description, image});
    return NextResponse.json({ messsage: "About updated successfully"}, {status: 200})

}

export async function GET(request: any, {params}: any){
    const {id} = params;
    await connectMongoDB();
    const education= await Education.findOne({_id: id});
    return NextResponse.json({ education }, { status: 200 });
}