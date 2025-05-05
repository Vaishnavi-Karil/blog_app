import React, { FC } from "react";
import Styles from "./createblog.module.css";
// src\app\globals.css

type CreateBlogPageProps = {};

const CreateBlogPage: FC<CreateBlogPageProps> = (props) => {
  return (
    <div>
      <h1>Create Blog +</h1>
      <form className={Styles.form_createblog}>
        <div className={Styles.flexcolumn}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Title"
          />
        </div>
        <div className={Styles.flexcolumn}>
          <label htmlFor="content">Content:</label>
          <textarea
            row="6"
            id="content"
            name="content"
            required
            placeholder="Content"
          ></textarea>
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
