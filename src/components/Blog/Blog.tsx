import Image from "next/image";
import { FC } from "react";
type Blog = {
  id: number;
  title: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
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
};

export const BlogPaperCard: FC<BlogPaperCardProps> = ({ blog }) => {
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
      <BlogDescriptionContainer blog={blog} />
    </div>
  );
};

type BlogDescriptionContainerProps = {
  blog: Blog;
};

export function BlogDescriptionContainer({
  blog,
}: BlogDescriptionContainerProps) {
  console.log("BlogDescriptionContainer", blog);
  const { author, content, created_at, id, title, updated_at } = blog;

  console.log(
    "BlogDescriptionContainer",
    author,
    content,
    created_at,
    id,
    title,
    updated_at
  );

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
        <p>
          <strong>Created At:</strong>
          {new Date(created_at).toLocaleDateString()}
        </p>
      </div>
      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>

      {/* <p>
        <strong>Updated At:</strong> {new Date(updated_at).toLocaleDateString()}
      </p> */}
    </div>
  );
}
