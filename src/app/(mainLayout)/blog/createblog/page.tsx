import React, { FC } from "react";

type CreateBlogPageProps = {};

const CreateBlogPage: FC<CreateBlogPageProps> = (props) => {
  return (
    <div>
      <h1>Create Blog</h1>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
