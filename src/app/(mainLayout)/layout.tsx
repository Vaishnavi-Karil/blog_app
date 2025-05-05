import Header from "@/components/Header/Header";
import "../../app/globals.css";

type MainLayoutprops = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: MainLayoutprops) {
  return (
    <>
      <Header />
      {/* <div style={{ border: "1px solid black" }}>{children}</div> */}
      <div className="MainLayout_children">{children}</div>
    </>
  );
}
