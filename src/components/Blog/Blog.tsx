"use client";
import { getYouBlogPublishedOrUnPublished } from "@/lib/apicalls/blog";
import { Switch } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { boolean } from "yup";
type Blog = {
  id: number;
  title: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
  published: number;
};

type BlogPaperProps = {};

export const BlogPaper: FC<BlogPaperProps> = (props) => {
  return (
    <div className="blog_paper">
      <div className="blog_paper_header">
        <div>
          <h1>React Node</h1>
        </div>
        <div>
          <h1>Blogs</h1>
        </div>
      </div>
      <div>
        <div className="blog_paper_image_container">
          <Image
            src="/destoppic-1.jpg"
            alt="Desktop background"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

type BlogPaperCardProps = {
  blog: Blog;
  isPage: string;
};

export const BlogPaperCard: FC<BlogPaperCardProps> = ({ blog, isPage }) => {
  const { fileUrl } = blog;
  return (
    <div className="paper">
      <Image
        // src="/square-image.jpg"
        src={fileUrl}
        alt="Desktop background"
        width={600}
        height={400}
        priority
      />
      <BlogDescriptionContainer blog={blog} isPage={isPage} />
    </div>
  );
};

type BlogDescriptionContainerProps = {
  blog: Blog;
  isPage: string;
};

export function BlogDescriptionContainer({
  blog,
  isPage,
}: BlogDescriptionContainerProps) {
  console.log("BlogDescriptionContainer", blog);
  const { author, content, created_at, id, title, updated_at, published } =
    blog;
  const [checked, setchecked] = useState<boolean>(false);
  const [selectedPublishedId, setSelectedPublishedId] = useState<
    number | null
  >();
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (published) {
      setchecked(true);
    } else {
      setchecked(false);
    }
  }, []);
  useEffect(() => {
    if (created_at) {
      setFormattedDate(new Date(created_at).toLocaleDateString());
    }
  }, [created_at]);

  console.log(
    "BlogDescriptionContainer",
    author,
    content,
    created_at,
    id,
    title,
    updated_at
  );
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    console.log("blogId ____ event.target.value", event.target.checked);
    console.log("id", id);
    setSelectedPublishedId(id);
    setchecked(event.target.checked);

    console.log("checked", event.target.checked);

    const user = localStorage.getItem("user");
    const getLoginDetails = user ? JSON.parse(user) : null;

    console.log("getLoginDetails", getLoginDetails);
    const { id: authorId } = getLoginDetails;
    console.log(
      "checked",
      checked,
      "checked === true ? 1 : 0",
      checked === true ? 1 : 0
    );
    let published = event.target.checked === true ? 1 : 0;
    console.log("selectedPublishedId", selectedPublishedId);

    let blogDetails = {
      blogId: id,
      published,
      authorId,
    };

    console.log("blogDetails", blogDetails);

    getYouBlogPublishedOrUnPublished(blogDetails)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  }
  const label = {
    color: "primary" as "primary", // explicitly typed as MUI color
    name: "publishToggle",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleChange(event, id),
    checked: checked,
  };

  return (
    <div className="paper_content">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            // gap: "1rem",
            alignItems: "center",
          }}
        >
          {isPage != "Home" && (
            <>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                }}
                onClick={() => {
                  console.log("Edit blog with ID:", id);
                }}
              >
                ✏️
              </button>
              <Switch {...label} />
            </>
          )}
          {isPage === "Home" && formattedDate && (
            <p>
              <strong>Created At:</strong> {formattedDate}
            </p>
          )}
        </div>
      </div>

      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </div>
  );
}
