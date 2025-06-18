import { NextResponse } from "next/server";
import db from "../../../../../lib/db";
type Params = {
  params: {
    blogId: string;
  };
};
export async function PUT(request: NextResponse, { params }: Params) {
  try {
    const { blogId } = params;
    const { published, authorId } = await request.json();
    const [blog] = await db.query(
      "UPDATE blogs SET published = ? WHERE id = ? AND authorId = ?",
      [published, blogId, authorId]
    );

    console.log("Blogs fetched successfully:", blog);

    if (published === 0) {
      return NextResponse.json(
        {
          message: "Blog unpublished successfully",
          blog,
        },
        {
          status: 200,
        }
      );
    }

    if (published === 1) {
      return NextResponse.json(
        {
          message: "published blog successfully",
          blog,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error to fetching  published blogs", error: String(error) },
      { status: 500 }
    );
  }
}
