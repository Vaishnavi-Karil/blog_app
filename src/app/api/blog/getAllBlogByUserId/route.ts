import { NextResponse } from "next/server";
import db from "../../../../lib/db";
export async function GET(request: NextResponse) {
  try {
    const searchParam = new URL(request.url);
    console.log("Search param === ", searchParam);
    const userId = searchParam.searchParams.get("userId");
    console.log("userId", userId);

    if (!userId) {
      return NextResponse.json(
        { message: "Missing userId in query" },
        { status: 400 }
      );
    }
    const [blog] = await db.query("SELECT * FROM blogs WHERE authorId = ?", [
      userId,
    ]);

    console.log("Blogs fetched successfully:", blog);

    return NextResponse.json({
      message: "fetch all the blogs of user successfully",
      blog,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching blogs", error: String(error) },
      { status: 500 }
    );
  }
}
