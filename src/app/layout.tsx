"use client";
import type { Metadata } from "next";
import "./globals.css";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "My App | Dashboard",
//   description: "This is the default description for my app.",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  let isLoginAndRegisterPage = pathname === "/" || pathname === "/register";

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital@0;1&family=Varela&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="vsc-initialized">
        {isLoginAndRegisterPage ? (
          <div className="maincontainer">
            <div className="hero_container">
              {/* <h1 className="bloggingapp">Blogging App</h1> */}
            </div>
            <div style={{ flex: "1", alignContent: "center" }}>{children}</div>
          </div>
        ) : (
          <div className="application_main_container"> {children}</div>
        )}
      </body>
    </html>
  );
}
