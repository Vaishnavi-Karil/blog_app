import { NextResponse } from "next/server";
import db from "../../../../lib/db";
export async function GET(request: NextResponse) {
  try {
    const [blog] = await db.query("SELECT * FROM blogs WHERE published = true");

    console.log("Blogs fetched successfully:", blog);

    return NextResponse.json(
      {
        message: "fetch all published blogs",
        blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error to fetching  published blogs", error: String(error) },
      { status: 500 }
    );
  }
}
