import { request, token } from "../request";

export const fetchPublishedBlogs = async () => {
  try {
    // const res = await fetch(request.blog, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = await fetch(request.getAllPublishedBlog);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    console.log("fetch blogs", data);
    return data;
  } catch (error) {
    return new Error("Someting went wrong while fetching published blogs");
  }
};

export const getAllBlogByUserId = async (userId: number) => {
  try {
    // const res = await fetch(request.blog, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = await fetch(`${request.getAllBlogByUserId}?userId=${userId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    console.log("fetch blogs", data);
    return data;
  } catch (error) {
    return new Error("Someting went wrong while fetching published blogs");
  }
};

export const createBlog = async (blog: any) => {
  const res = await fetch(request.blog, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (!res.ok) {
    throw new Error("Failed to create blog");
  }
  const data = await res.json();
  return data;
};
