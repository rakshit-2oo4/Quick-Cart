import connectDB from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { address } = await request.json(); // ✅ destructure properly

    await connectDB();

    const newAddress = await Address.create({
      userId,
      ...address, // ✅ directly spread
    });

    return NextResponse.json(
      { success: true, message: "Address added successfully", address: newAddress },
      { status: 201 }
    );

  } catch (error) {
    console.log("ADDRESS ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}