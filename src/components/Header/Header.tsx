"use client";
import { loggedInUser } from "@/app/_config";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  // let getLoginedUserDetails = localStorage.getItem("user");
  // let getloginUserDetailsObject = JSON.parse(getLoginedUserDetails);
  // console.log("getLoginedUserDetails", getloginUserDetailsObject);

  const [getloginDetails, setgetloginDetails] = useState({});
  const { name, id, email } = getloginDetails;
  useEffect(() => {
    // This code will run only in the browser
    const user = JSON.parse(localStorage.getItem("user"));
    setgetloginDetails(user);
  }, []);

  return (
    <>
      <FlexBoxColumn>
        <FlexBoxRow>
          <header>
            <Logo />
            <Navbar />
            <FlexBoxRow>
              <Avatar />
              {/* <Search /> */}
              <div className="lineheight_container">
                <p> {name}</p>
                <p>{email}</p>
              </div>
            </FlexBoxRow>
          </header>
        </FlexBoxRow>
        {/* <BlogPaper /> */}
      </FlexBoxColumn>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">Home</Link>
        </li>

        <li>
          <Link href="/myblog">MyBlog</Link>
        </li>

        <li>
          <Link href="/blog/createblog"> +Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link href="/logout">Logout</Link>
        </li> */}
      </ul>
    </nav>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      {/* <Image
        src="profileimage.jpeg"
        alt="Profile Avatar"
        className="profileimage"
        width={40} // required
        height={40}
      /> */}

      <Image
        src="/profileimage.jpeg" // Ensure the path is correct, especially if it's in the public folder
        alt="Profile Avatar"
        width={150} // Specify the width
        height={150} // Specify the height
        className="profileimage"
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <Link href="/blog">Blogging</Link>
    </div>
  );
}

type FlexBoxRowProps = {
  children: React.ReactNode;
};
function FlexBoxRow({ children }: FlexBoxRowProps) {
  return <div className="flexboxrow ">{children}</div>;
}

type FlexBoxColumnProps = {
  children: React.ReactNode;
};
function FlexBoxColumn({ children }: FlexBoxColumnProps) {
  return <div className="flexboxcolumn stickyproperty">{children}</div>;
}
