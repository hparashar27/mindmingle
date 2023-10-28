import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Contact from "../../../models/contact"

export async function POST(req,res){
    const {username,email,phone,subject,message} = await req.json();
    await connectMongoDB();
    await Contact.create({username,email,phone,subject,message});
    return NextResponse.json(
        {message : " Contact created"},
        {status : 201}
    );
}

export async function GET(){
    await connectMongoDB();
    const contacts = await Contact.find();
    return NextResponse.json({contacts});

}