import connectMongoDB from "@/libs/mongodb"
import About from "@/models/AboutModel";
import { NextResponse } from "next/server";


export async function POST(request: { json: () => { content: any; email: any; phoneNumber: any; }; }) {
    const {content,email,phoneNumber} = request.json();
    await connectMongoDB();
    await About.create({content,email,phoneNumber});
    
    return NextResponse.json({message: "Success"}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const about = await About.find();
    return NextResponse.json(about, { status: 200 });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await About.findByIdAndDelete(id);
    return NextResponse.json({ message: "About Deleted"}, { status:200});
}