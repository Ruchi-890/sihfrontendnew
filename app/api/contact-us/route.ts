import { NextResponse } from "next/server";
import { Message } from "@/models/userMessage.models";

export default async function POST(req: Request) {
    try {
        const { fullName, email, phoneNumber, message } = await req.json();
        if(!fullName || !email || !phoneNumber){
            throw new Error("invalid full name or email phone number and Message must be provided");

        }
        const newMessage=new Message(
            fullName,
            email,
            phoneNumber,
            message
        )
        await newMessage.save();
        return NextResponse.json({message:"message send successfully"})
    } catch (error:unknown) {
        console.error("Message not sending");
    }
}