"use client";

import { loginApiCall } from "@/lib/apicalls/auth";
import React, { FC, useEffect, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Styles from "./login.module.css";

type LoginPageProps = {
  email: string;
  password: string;
};

const LoginPage: FC<LoginPageProps> = (props) => {
  const [loginFormData, setloginFormData] = useState<LoginPageProps>({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const { email, password } = loginFormData;
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };
  async function onSubmitHandler() {
    console.log("clicked");
    loginApiCall(email, password)
      .then((res) => {
        console.log("res", res);

        console.log("Login successful", res);

        const { response, jsonresponse } = res;

        console.log("response", response);
        // Handle successful login here (e.g., redirect, show success message)
        const { token, user } = jsonresponse;
        console.log("token  at login page", token);
        const { name, id, email, password } = user;

        localStorage?.setItem("token", token);
        localStorage?.setItem("user", JSON.stringify(user));

        console.log("HELLO THIS IS ME");

        setTimeout(() => {
          router.push("/blog");
        }, 100);

        console.log("LOGIN USER DETAILS", name, id, email, password);
      })
      .catch((err) => {
        console.error("Login failed", err);
        // Handle login failure here (e.g., show error message)
      });
  }

  // async function onSubmitHandler() {
  //   loginApiCall(email, password)
  //     .then((res) => {
  //       console.log("res", res);

  //       //             {
  //       //     "message": "Your are logged in successfully.",
  //       //     "user": {
  //       //         "id": 3,
  //       //         "name": "Vaishnavi Karil",
  //       //         "email": "vaishnavikaril@gmail.com",
  //       //         "password": "$2b$10$eukkilL.s0tcB5LhBvC/duZsMtab8kUM76gtmXVOZEI6Rf56fd7be",
  //       //         "created_at": "2025-04-22T05:28:27.000Z",
  //       //         "updated_at": "2025-04-22T05:28:27.000Z"
  //       //     },
  //       //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ2YWlzaG5hdmlrYXJpbEBnbWFpbC5jb20iLCJuYW1lIjoiVmFpc2huYXZpIEthcmlsIiwiaWF0IjoxNzQ1ODEzODI0LCJleHAiOjE3NDU4MTc0MjR9.3Qr_Ask4fSArF8XqfSiKdS_hSo4jyPaTyojYVSzFk7U"
  //       // }

  //       const { message, token, user } = res;

  //       console.log(message, token, user);

  //     })
  //     .catch((err) => {
  //       console.error("Login failed", err);
  //       // Handle login failure here (e.g., show error message)
  //     });
  // }
  return (
    <div>
      <div>
        <h1>Blogging</h1>
        <p>
          Create, capture, and share your daily learnings—your personal space to
          reflect, grow, and revisit anytime.
        </p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitHandler();
        }}
      >
        <div className={Styles.flexboxcolumn}>
          <div className={Styles.inputgapset}>
            <label htmlFor="email_login">Email</label>
            <input
              id="email_login"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setloginFormData({
                  ...loginFormData,
                  email: event.target.value,
                });
              }}
              // style={{ width: "10rem" }}
            />
          </div>
          <div className={Styles.inputgapset}>
            <label htmlFor="enteryourpassword">Password</label>
            <div className={Styles.password_container}>
              <div className={Styles.flexcontainer}>
                <input
                  id="enteryourpassword"
                  placeholder="Enter your password"
                  type={hidePassword ? "password" : "text"}
                  value={password}
                  onChange={(event) => {
                    setloginFormData({
                      ...loginFormData,
                      password: event.target.value,
                    });
                  }}
                  // style={{ width: "100%", border: "none" }}
                />
              </div>

              <div
                className={Styles.eye_button}
                onClick={togglePasswordVisibility}
              >
                {hidePassword ? <FaRegEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <div className={Styles.flexboxcolumn}>
            <button type="submit" style={{ width: "100%" }}>
              Login
            </button>
            <button
              style={{ width: "100%" }}
              onClick={(e) => {
                e.preventDefault();
                router.push("/register");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
