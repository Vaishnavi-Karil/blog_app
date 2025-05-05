import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "../../../../../lib/db";
import * as jwt from "jsonwebtoken";
import { authenticateToken } from "@/lib/middleware/authenticateToken";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // console.log("email", email);
    // console.log("password", password);
    const query = `SELECT * FROM USERS WHERE email = ?`;

    const [user] = await db.query(query, [email]);

    const [userData] = user;
    // console.log("userData", userData);
    if (!userData) {
      return NextResponse.json({
        message: "User not found",
        status: 401,
      });
    }

    const {
      id: dbuserId,
      name: dbUserName,
      email: dbUserEmail,
      password: dbpassword,
    } = userData;

    const isPasswordValid = await bcrypt.compare(password, dbpassword);

    // console.log("isPasswordValid", isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json({
        message: "Unauthorized user",
        status: 401,
      });
    }

    const token = jwt.sign(
      { id: dbuserId, email: dbUserEmail, name: dbUserName },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      message: "Your are logged in successfully.",
      user: userData,
      token: token,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating User",
      status: 500,
    });
  }
}

//     password vaishnavi@karil
// userData {
//   id: 3,
//   name: 'Vaishnavi Karil',
//   email: 'vaishnavikaril@gmail.com',
//   password: '$2b$10$eukkilL.s0tcB5LhBvC/duZsMtab8kUM76gtmXVOZEI6Rf56fd7be',
//   created_at: 2025-04-22T05:28:27.000Z,
//   updated_at: 2025-04-22T05:28:27.000Z
