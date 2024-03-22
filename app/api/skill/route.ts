import connectMongoDB from "@/libs/mongodb"
import Skill from "@/models/skillModel";
import { NextResponse } from "next/server";


export async function POST(request: { text: () => Promise<string>; }) {

    const rawBody = await request.text();

    const params = new URLSearchParams(rawBody);
    const name = params.get('name');
    const level = Number(params.get('level'));
    const image = params.get('image');

    if (!name || !level || !image) {
        return NextResponse.json({ message: "Error: name, level, and image are required" }, { status: 400 });
    }

    await connectMongoDB();
    await Skill.create({ name, level, image });

    return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const skill = await Skill.find();
    return NextResponse.json(skill, { status: 200 });
}

export async function DELETE(request: { nextUrl: { searchParams: { get: (arg: string) => any; }; }; }) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Skill.findByIdAndDelete(id);
    return NextResponse.json({ message: "experience Deleted" }, { status: 200 });
}