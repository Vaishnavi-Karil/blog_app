import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "fetch all the User successfully." });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "User is created successfully." });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ message: "User is updated successfully" });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ message: "User is deleted successfully" });
}
