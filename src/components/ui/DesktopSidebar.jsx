import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const DesktopSidebar = () => {
  return (
    <aside className="max-[768px]:hidden sticky top-5 bg-surface dark:bg-surface-dark rounded-3xl p-4 h-[calc(100vh-40px)] flex flex-col gap-4">
      <Logo />
      <Navbar />
    </aside>
  );
};
