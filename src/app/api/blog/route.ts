import { NextRequest, NextResponse } from "next/server";
import db from "../../../lib/db";
import path from "path";
import fs from "fs";
import { authenticateToken } from "@/lib/middleware/authenticateToken";

export async function GET(request: NextRequest) {
  try {
    // const validatedRequest = await authenticateToken(request);
    // if (validatedRequest instanceof NextResponse) {
    //   return validatedRequest; // Return if middleware returns a response (token validation failed)
    // }

    const [blog] = await db.query("SELECT * FROM blogs");

    console.log("Blogs fetched successfully:", blog);

    return NextResponse.json({
      message: "fetch all the blogs successfully",
      blog,
    });
  } catch (error) {
    console.log("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Error fetching blogs", error: String(error) },
      { status: 500 }
    );
  }
}

// app/api/blog/route.ts

const UPLOAD_DIR = path.resolve(process.cwd(), "public/uploads");

// Ensure the uploads directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const POST = async (req: NextRequest) => {
  // Parse the incoming form data
  const formData = await req.formData();
  const file = formData.get("fileUrl") as File;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;
  const authorId = formData.get("authorId") as string;
  console.log("formDate", formData);
  console.log("file", file);

  if (!file || !title || !content || !author || !authorId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Generate a unique filename to prevent overwriting
  const filename = `${Date.now()}-${file.name}`;
  const filePath = path.join(UPLOAD_DIR, filename);

  // Convert the file to a buffer and save it
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  let fileUrl = `/uploads/${filename}`;

  // Create the blog object
  const blog = {
    title,
    content,
    author,
    fileUrl: `/uploads/${filename}`,
  };

  // const { title, content, author, fileUrl } = blog;

  console.log("Blog data:", blog);
  try {
    const [sqlresult] = await db.query(
      `INSERT INTO blogs ( title, content, author, fileUrl, authorId) VALUES (?, ?, ?, ?, ?)`,
      [title, content, author, fileUrl, authorId]
    );

    console.log("Blog successfully created:", sqlresult);
    console.log("Blog successfully created: InsertId", sqlresult?.insertId);

    let createdBlogId = sqlresult?.insertId;

    const [createdBlog] = await db.query(`SELECT * FROM BLOGS WHERE id = ?`, [
      createdBlogId,
    ]);

    const [createdBlogData] = createdBlog;
    return NextResponse.json({
      message: "Blog is created successfully.",
      blog: createdBlogData,
    });
  } catch (error) {
    console.log("ERROR __ while creating the blog", error);
    return NextResponse.json({
      message: "Error creating blog",
      error: error,
    });
  }
};

export async function PUT(request: NextRequest) {
  return NextResponse.json({ message: "Blog is updated successfully" });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ message: "Blog is deleted successfully" });
}
