import Image from "next/image";
import React, { FC } from "react";

type BlogPageProps = {};

const BlogPage: FC<BlogPageProps> = (props) => {
  return (
    <div>
      <BlogPaper />
      <div className="blog_paper_container">
        <BlogPaperCard />
        <BlogPaperCard />
        <BlogPaperCard />
        {/* <BlogPaperCard /> */}
      </div>
    </div>
  );
};

export default BlogPage;

type BlogPaperProps = {};

const BlogPaper: FC<BlogPaperProps> = (props) => {
  return (
    <div className="blog_paper">
      <div className="blog_paper_header">
        <div>
          <h1>React Node</h1>
        </div>
        <div>
          <h1>Blog</h1>
        </div>
      </div>
      <div className="blog_paper_image_container">
        {/* index 0 image container */}
        <Image
          src="/destoppic.jpg" // ✅ Don't include "public"
          alt="Desktop background"
          width={600} // 🔧 Set desired width
          height={400} // 🔧 Set desired height
          priority // Optional: preload for performance
        />
      </div>
    </div>
  );
};

type BlogPaperCardProps = {};

const BlogPaperCard: FC<BlogPaperCardProps> = (props) => {
  return (
    <div className="paper">
      <Image
        src="/square-image.jpg" // ✅ Don't include "public"
        alt="Desktop background"
        width={600} // 🔧 Set desired width
        height={400} // 🔧 Set desired height
        priority // Optional: preload for performance
      />
      <BlogDescriptionContainer />
    </div>
  );
};

function BlogDescriptionContainer() {
  return (
    <div className="paper_content">
      <h3>Blog Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        ullam?
      </p>
    </div>
  );
}
