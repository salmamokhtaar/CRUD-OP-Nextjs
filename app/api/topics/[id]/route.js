import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) { 
    const { id } = params;  // Get the ID from params
const { newTitle: title, newDescription: description } = await request.json(); // Call json() as a function

    await connectMongoDB();

    const updatedTopic = await Topic.findByIdAndUpdate(
        id,
        { title, description },
        { new: true } // Return the updated document
    );

    if (!updatedTopic) {
        return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic Updated", topic: updatedTopic }, { status: 200 });
}


// get single by id
export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
   const topic= await Topic.findOne({_id:id})
    return NextResponse.json({topic}, {status: 200})
}