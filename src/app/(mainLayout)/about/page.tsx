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
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis
            nihil doloremque expedita, porro aperiam amet veritatis dolorum
            dignissimos aspernatur eius! Soluta quis, fugit debitis
            exercitationem impedit eos! Nulla velit porro corrupti, placeat
            deleniti animi quis ab sapiente ipsa harum magni tempore temporibus
            optio in consectetur? Animi deserunt minima aliquid!
          </p>
        </div>
      </div>
    </div>
  );
}
