import connectMongoDB from "@/libs/mongodb"
import Project from "@/models/projectModel";
import { NextResponse } from "next/server";

export async function PUT(request: any, {params}: any){
    const {id} = params;
    const {newTitle : title, newLink : link , newDescription: description, newImage: image, newStacks: stacks} = request.json();
    await connectMongoDB();
    await Project.findByIdAndUpdate(id,{ title,link,description,image,stacks });
    return NextResponse.json({ messsage: "Experience updated successfully"}, {status: 200})

}

export async function GET(request: any, {params}: any){
    const {id} = params;
    await connectMongoDB();
    const project= await Project.findOne({_id: id});
    return NextResponse.json({ project }, { status: 200 });
}