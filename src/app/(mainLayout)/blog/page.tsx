"use client";
import { BlogPaper, BlogPaperCard } from "@/components/Blog/Blog";
import { fetchPublishedBlogs } from "@/lib/apicalls/blog";
import React, { FC, useEffect, useState } from "react";

type BlogPageProps = {};

type Blog = {
  id: number;
  title: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
};

const BlogPage: FC<BlogPageProps> = (props) => {
  const [blogs, setblogs] = useState<Blog[]>([]);
  useEffect(() => {
    fetchPublishedBlogs()
      .then((res) => {
        console.log("blogs", res.blog);
        setblogs(res.blog);

        console.log("blogs", blogs);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <BlogPaper />
      <h1>Blogs</h1>
      <div className="blog_paper_container">
        {blogs?.map((blog, index) => {
          return <BlogPaperCard key={index} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default BlogPage;
