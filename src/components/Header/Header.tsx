import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <FlexBoxColumn>
        <FlexBoxRow>
          <header>
            <Logo />
            <Navbar />
            <FlexBoxRow>
              <Avatar />
              <Search />
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
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog/createblog"> +Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/logout"> Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="/path/to/avatar.jpg" alt="Profile Avatar" />
    </div>
  );
}

function Logo() {
  return <div className="logo">BlogLogo</div>;
}

function Search() {
  return <input type="text" placeholder="Search..." />;
}

type FlexBoxRowProps = {
  children: React.ReactNode;
};
function FlexBoxRow({ children }: FlexBoxRowProps) {
  return <div className="flexboxrow">{children}</div>;
}

type FlexBoxColumnProps = {
  children: React.ReactNode;
};
function FlexBoxColumn({ children }: FlexBoxColumnProps) {
  return <div className="flexboxcolumn">{children}</div>;
}
