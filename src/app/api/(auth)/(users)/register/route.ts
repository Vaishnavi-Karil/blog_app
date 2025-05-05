import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "../../../../../lib/db";
// Adjust the import path as necessary

// export async function GET(request: NextRequest) {
//   return NextResponse.json({ message: "fetch all the User successfully." });
// }

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const [createdUser] = await db.query(
      `INSERT INTO USERS (name, email, password) VALUES (?, ?, ?)`,
      [name, email, hashedPassword]
    );

    if (!createdUser) {
      return NextResponse.json({
        message: "Error creating User",
      });
    }

    const createdUserId = createdUser.insertId;

    const [user] = await db.query(`SELECT * FROM USERS WHERE id = ?`, [
      createdUserId,
    ]);
    const [createdUserData] = user;

    console.log("User created successfully:", createdUser);

    return NextResponse.json({
      message: "User is created successfully.",
      user: createdUserData,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating User",
      error: error,
      status: 500,
    });
  }
}

// export async function PUT(request: NextRequest) {
//   return NextResponse.json({ message: "User is updated successfully" });
// }

// export async function DELETE(request: NextRequest) {
//   return NextResponse.json({ message: "User is deleted successfully" });
// }
