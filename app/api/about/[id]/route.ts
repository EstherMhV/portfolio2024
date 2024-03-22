import connectMongoDB from "@/libs/mongodb"
import About from "@/models/AboutModel";
import { NextResponse } from "next/server";

export async function PUT(request: any, {params}: any){
    const {id} = params;
    const {newContent : content, newEmail : email , newPhoneNumber : phoneNumber} = request.json();
    await connectMongoDB();
    await About.findByIdAndUpdate(id,{ content, email, phoneNumber});
    return NextResponse.json({ messsage: "About updated successfully"}, {status: 200})

}

export async function GET(request: any, {params}: any){
    const {id} = params;
    await connectMongoDB();
    const about = await About.findOne({_id: id});
    return NextResponse.json({ about }, { status: 200 });
}