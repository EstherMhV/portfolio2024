import connectMongoDB from "@/libs/mongodb"
import Education from "@/models/educationModel";
import { NextResponse } from "next/server";

export async function POST(request: { text: () => Promise<string>; }) {

    const rawBody = await request.text();


    const params = new URLSearchParams(rawBody);
    const degree = params.get('degree');
    const period = params.get('period');
    const description = params.get('description');
    const image = params.get('image');

    await connectMongoDB();
    await Education.create({degree,period,description,image});
    
    return NextResponse.json({message: "Success"}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const education = await Education.find();
    return NextResponse.json(education, { status: 200 });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg: string) => any; }; }; }) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Education.findByIdAndDelete(id);
    return NextResponse.json({ message: "education Deleted"}, { status:200});
}