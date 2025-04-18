import Header from "@/components/Header/Header";
import "../../app/globals.css";

type MainLayoutprops = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: MainLayoutprops) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
