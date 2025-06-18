"use client";
import React,  from "react";
import Styles from "./createblog.module.css";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

type FormInputs = {
  title: string;
  content: string;
  file: FileList;
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  file: Yup.mixed().test("fileSize", "File too large", (value) => {
    return !value || (value[0] && value[0].size <= 2 * 1024 * 1024); // 2MB
  }),
});

const CreateBlogPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    const user = localStorage.getItem("user");
    if (!user) return alert("User not found in local storage.");

    const userObj = JSON.parse(user);
    const { id: authorId, name: author } = userObj;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content); // Backend expects this
    formData.append("author", author);
    formData.append("authorId", authorId);
    if (data.file && data.file.length > 0) {
      formData.append("fileUrl", data.file[0]);
    }

    try {
      const response = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();
      if (response.ok) {
        alert("✅ Blog created successfully");
        reset(); // clear form
      } else {
        alert(resData.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit blog");
    }
  };

  return (
    <div>
      <h1>Create Blog +</h1>
      <form
        className={Styles.form_createblog}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={Styles.flexcolumn}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            placeholder="Title"
          />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>

        <div className={Styles.flexcolumn}>
          <label htmlFor="content">Content:</label>
          <textarea
            rows={6}
            id="content"
            {...register("content")}
            placeholder="Content"
          ></textarea>
          {errors.content && (
            <p style={{ color: "red" }}>{errors.content.message}</p>
          )}
        </div>

        <div className={Styles.flexcolumn}>
          <label htmlFor="file">Upload Image (optional, max 2MB):</label>
          <input type="file" id="file" accept="image/*" {...register("file")} />
          {errors.file && <p style={{ color: "red" }}>{errors.file.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
