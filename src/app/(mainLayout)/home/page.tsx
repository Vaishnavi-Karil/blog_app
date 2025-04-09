import Image from "next/image";

export default function HomePage() {
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
}

function BlogPaper() {
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
}
function BlogPaperCard() {
  return (
    <div>
      <div className="paper">
        <Image
          src="/square-image.jpg" // ✅ Don't include "public"
          alt="Desktop background"
          width={600} // 🔧 Set desired width
          height={400} // 🔧 Set desired height
          priority // Optional: preload for performance
        />
      </div>
      <BlogDescriptionContainer />
    </div>
  );
}

function BlogDescriptionContainer() {
  return (
    <div className="paper_content">
      <h3>Blog Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        ullam? Aspernatur laboriosam aliquam, ipsam voluptates excepturi veniam
        rque quas.
      </p>
    </div>
  );
}
