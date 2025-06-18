"use client";
import Image from "next/image";
// import Style from "./about.module.css";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="aboutpage_container">
      <div className="aboutpage_container_about_details ">
        <div className="aboutpage_container_image_container">
          <Image
            src="/profileimage.jpeg" // Ensure the path is correct, especially if it's in the public folder
            alt="Profile Avatar"
            width={420} // Specify the width
            height={420} // Specify the height
            className="aboutimage"
          />
        </div>
        <div className="aboutpage_container_about_description">
          <h1 className="heading" style={{ fontSize: "2.2rem" }}>
            {" "}
            About Us
          </h1>
          <div className="container_fixe">
            <p>
              Welcome to our Blog Application, a platform designed for content
              creators to share their ideas, insights, and stories with the
              world. Whether you're a passionate writer, a business
              professional, or someone who loves to express thoughts, our
              platform offers an easy and intuitive way to create, publish, and
              manage blog posts. With a focus on simplicity and security, we
              ensure a seamless experience through robust features like user
              authentication, image uploads, and role-based access control. The
              application supports both authors and admins, allowing flexible
              content management. We prioritize user-friendly design, making it
              accessible to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
