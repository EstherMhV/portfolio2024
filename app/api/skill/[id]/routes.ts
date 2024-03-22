import connectMongoDB from "@/libs/mongodb"
import Skill from "@/models/projectModel";
import { NextResponse } from "next/server";

export async function PUT(request: any, {params}: any){
    const {id} = params;
    const {newName: name, newLevel : level, newImage: image } = request.json();
    await connectMongoDB();
    await Skill.findByIdAndUpdate(id,{ name,level,image });
    return NextResponse.json({ messsage: "Experience updated successfully"}, {status: 200})

}

export async function GET(request: any, {params}: any){
    const {id} = params;
    await connectMongoDB();
    const skill = await Skill.findOne({_id: id});
    return NextResponse.json({ skill }, { status: 200 });
}