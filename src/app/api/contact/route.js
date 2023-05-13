import dbConnect from "../../../utils/dbConnect"


import { userModel } from "@/models/userModel"

import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await userModel.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

        
        // return NextResponse.json(res.send("happy"))

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}


// GET request



export async function GET(req, res) {
    try {
      await dbConnect();
  
      // Fetch all users from the database
      const users = await userModel.find();
  
      return NextResponse.json({
        users: users,
      }, {
        status: 200
      });
    } catch (e) {
      return NextResponse.json(
        { message: "Server error, please try again!" },
        { status: 500 }
      );
    }
  }
