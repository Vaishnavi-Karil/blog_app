// "use client";
// import { MenuItem, Select } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [getloginDetails, setgetloginDetails] = useState({});

//   const { name, id, email } = getloginDetails;
//   const [dropdownselectedValue, setdropdownselectedValue] =
//     useState<string>("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     setgetloginDetails(user);
//   }, []);

//   return (
//     <>
//       <FlexBoxColumn>
//         <FlexBoxRow>
//           <header>
//             <Logo />
//             <Navbar />
//             <FlexBoxRow style={{ alignItems: "center", gap: "8px" }}>
//               <Avatar />
//               <Select
//                 value={dropdownselectedValue}
//                 onChange={(e) => {
//                   const selectedValue = e.target.value;
//                   setdropdownselectedValue(selectedValue);

//                   console.log(
//                     "event.target.value for dropdownselectedValue",
//                     selectedValue,
//                     selectedValue === "logout"
//                   );

//                   if (selectedValue === "logout") {
//                     localStorage.removeItem("user");
//                     localStorage.removeItem("token");
//                     router.push("/");
//                   }
//                 }}
//                 size="small"
//                 sx={{
//                   minWidth: 20,
//                   height: 30,
//                   fontSize: "0.8rem",
//                   padding: 0,
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     border: "none",
//                   },
//                   "& .MuiSelect-select": {
//                     padding: "0 4px",
//                   },
//                 }}
//               >
//                 <MenuItem value="logout">Logout</MenuItem>
//               </Select>
//               <div
//                 className="lineheight_container"
//                 style={{ lineHeight: "0.2" }}
//               >
//                 <p>{name}</p>
//                 <p>{email}</p>
//               </div>
//             </FlexBoxRow>
//           </header>
//         </FlexBoxRow>
//         {/* <BlogPaper /> */}
//       </FlexBoxColumn>
//     </>
//   );
// }

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/blog">Home</Link>
//         </li>

//         <li>
//           <Link href="/myblog">MyBlog</Link>
//         </li>

//         <li>
//           <Link href="/blog/createblog"> +Blog</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//         {/* <li>
//           <Link href="/logout">Logout</Link>
//         </li> */}
//       </ul>
//     </nav>
//   );
// }

// function Avatar() {
//   return (
//     <div className="avatar">
//       {/* <Image
//         src="profileimage.jpeg"
//         alt="Profile Avatar"
//         className="profileimage"
//         width={40} // required
//         height={40}
//       /> */}

//       <Image
//         src="/profileimage.jpeg" // Ensure the path is correct, especially if it's in the public folder
//         alt="Profile Avatar"
//         width={150} // Specify the width
//         height={150} // Specify the height
//         className="profileimage"
//       />
//     </div>
//   );
// }

// function Logo() {
//   return (
//     <div className="logo">
//       <Link href="/blog">Blogging</Link>
//     </div>
//   );
// }

// type FlexBoxRowProps = {
//   children: React.ReactNode;
// };
// function FlexBoxRow({ children }: FlexBoxRowProps) {
//   return <div className="flexboxrow ">{children}</div>;
// }

// type FlexBoxColumnProps = {
//   children: React.ReactNode;
// };
// function FlexBoxColumn({ children }: FlexBoxColumnProps) {
//   return <div className="flexboxcolumn stickyproperty">{children}</div>;
// }

"use client";
import {
  MenuItem,
  Select,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [getloginDetails, setgetloginDetails] = useState({});
  const { name, id, email } = getloginDetails;
  const [dropdownselectedValue, setdropdownselectedValue] =
    useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setgetloginDetails(user);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    <>
      <FlexBoxColumn>
        <FlexBoxRow>
          <header>
            <IconButton
              onClick={handleDrawerToggle}
              // sx={{ marginLeft: "auto" }}

              className="menu_item"
              sx={{
                "@media (min-width: 600px)": {
                  display: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <Navbar />
            <Drawer
              className="drawer"
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                <ListItem button onClick={() => handleNavigation("/blog")}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation("/myblog")}>
                  <ListItemText primary="MyBlog" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleNavigation("/blog/createblog")}
                >
                  <ListItemText primary="+Blog" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation("/about")}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation("/contact")}>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
            <FlexBoxRow style={{ alignItems: "center", gap: "8px" }}>
              <Avatar />
              <Select
                value={dropdownselectedValue}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  setdropdownselectedValue(selectedValue);

                  if (selectedValue === "logout") {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    router.push("/");
                  }
                }}
                size="small"
                sx={{
                  minWidth: 20,
                  height: 30,
                  fontSize: "0.8rem",
                  padding: 0,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    padding: "0 4px",
                  },
                }}
              >
                <MenuItem value="logout">Logout</MenuItem>
              </Select>
              <div
                className="lineheight_container"
                style={{ lineHeight: "0.2" }}
              >
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </FlexBoxRow>
          </header>
        </FlexBoxRow>
      </FlexBoxColumn>
    </>
  );
}

function Navbar() {
  const router = useRouter();
  console.log("navbar__router", router);
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
      </ul>
    </nav>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <Image
        src="/profileimage.jpeg"
        alt="Profile Avatar"
        width={150}
        height={150}
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
