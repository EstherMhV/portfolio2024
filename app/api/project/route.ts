import connectMongoDB from "@/libs/mongodb"
import Project from "@/models/projectModel";
import { NextResponse } from "next/server";


export async function POST(request: { json: () => { title: any; link: any; description: any; image: any; stacks: any; }; }) {
    const {title,link,description,image,stacks} = request.json();
    await connectMongoDB();
    await Project.create({title,link,description,image,stacks});
    
    return NextResponse.json({message: "Success"}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const project = await Project.find();
    return NextResponse.json(project, { status: 200 });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg: string) => any; }; }; }) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "experience Deleted"}, { status:200});
}