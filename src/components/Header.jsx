import React from "react";
import { Logo } from "./ui/Logo";
import { Navbar } from "./ui/Navbar";
import { AppModeToggle } from "./ui/AppModeToggle";
import { Menu, Search } from "lucide-react";
import { SearchInput } from "./ui/SearchInput";
import { MobileSidebar } from "./ui/MobileSidebar";
import { Input } from "./ui/Input";

export const Header = () => {
  return (
    <>
      <header className="bg-surface dark:bg-surface-dark h-12 md:bg-main md:dark:bg-main-dark md:h-10">
        <div className="flex items-center justify-between w-full h-full px-3">
          <section className="md:hidden">
            <Logo />
          </section>
          <section>
            <ul className="md:hidden flex items-center gap-3 pt-2">
              <li>
                <SearchInput />
              </li>
              <li>
                <AppModeToggle />
              </li>
              <li>
                <MobileSidebar />
              </li>
            </ul>
          </section>

          <section className="w-full hidden md:flex md:gap-3 md:items-center">
            <Input/>
            <AppModeToggle/>
          </section>
        </div>
      </header>
    </>
  );
};
