import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DesktopSidebar } from "../components/ui/DesktopSidebar";

export const AppLayout = () => {
  return (
    <div className="md:grid md:grid-cols-[25%_75%] md:p-5 md:gap-5 lg:grid-cols-[20%_80%]">
        <DesktopSidebar />
      <div className="md:w-[calc(100vw-25vw-1.25rem-2.5rem)] lg:w-[calc(100vw-20vw-1.25rem-2.5rem)]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
