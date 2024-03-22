import connectMongoDB from "@/libs/mongodb"
import Experience from "@/models/experienceModel";
import { NextResponse } from "next/server";

export async function PUT(request: any, {params}: any){
    const {id} = params;
    const {newTitle : title, newDescription : description , newCompany : company, newPeriod: period, newStack: stack} = request.json();
    await connectMongoDB();
    await Experience.findByIdAndUpdate(id,{ title,description,company,period,stack });
    return NextResponse.json({ messsage: "Experience updated successfully"}, {status: 200})

}

export async function GET(request: any, {params}: any){
    const {id} = params;
    await connectMongoDB();
    const experience= await Experience.findOne({_id: id});
    return NextResponse.json({ experience }, { status: 200 });
}