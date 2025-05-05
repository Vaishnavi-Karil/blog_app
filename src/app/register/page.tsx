"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  name: string;
  email: string;
  password: string;
};

const Register = (props: Props) => {
  const [registerFormDate, setregisterFormDate] = useState<Props>({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = registerFormDate;
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>Create Your Account</h1>
        <p>
          Turn your everyday experiences into something extraordinary—every
          journey begins with a single word. Start yours today.
        </p>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          id="name"
          value={name}
          onChange={(e) =>
            setregisterFormDate({
              ...registerFormDate,
              name: e.target.value,
            })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          id="email"
          value={email}
          onChange={(e) =>
            setregisterFormDate({
              ...registerFormDate,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password"
          id="password"
          type="password"
          value={password}
          onChange={(e) =>
            setregisterFormDate({
              ...registerFormDate,
              password: e.target.value,
            })
          }
        />
        <button type="submit">Register</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.replace("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
