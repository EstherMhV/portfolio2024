import connectMongoDB from "@/libs/mongodb"
import Experience from "@/models/experienceModel";
import { NextResponse } from "next/server";


export async function POST(request: { json: () => { title: any; period: any; description: any; company: any; stack: any; }; }) {
    const {title,description,company,period,stack} = request.json();
    await connectMongoDB();
    await Experience.create({title,description,company,period,stack});
    
    return NextResponse.json({message: "Success"}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const experience = await Experience.find();
    return NextResponse.json(experience, { status: 200 });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg: string) => any; }; }; }) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Experience.findByIdAndDelete(id);
    return NextResponse.json({ message: "experience Deleted"}, { status:200});
}