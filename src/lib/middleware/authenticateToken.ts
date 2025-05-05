// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export const authenticateToken = (req) => {
//   const token = req.headers.get("authorization")?.split(" ")[1]; // "Bearer token"

//   if (!token) {
//     return NextResponse.json(
//       { message: "Access Denied. No token provided." },
//       { status: 401 }
//     );
//   }

//   // Verify JWT
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return NextResponse.json(
//         { message: "Invalid or expired token." },
//         { status: 403 }
//       );
//     }

//     // Attach user to the request
//     req.user = user;
//   });
// };

import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const authenticateToken = async (req) => {
  const token = req.headers.get("authorization")?.split(" ")[1]; // "Bearer token"
  console.log("token", token);
  if (!token) {
    return NextResponse.json(
      { message: "Access Denied. No token provided." },
      { status: 401 }
    );
  }

  // Verify JWT
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to the request
    req.user = user;
    return NextResponse.next(); // Allow request to continue
  } catch (err) {
    return NextResponse.json(
      { message: "Invalid or expired token." },
      { status: 403 }
    );
  }
};
