import {
  ChartNoAxesCombined,
  Heart,
  House,
  Monitor,
  PersonStanding,
  Search,
  Video
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navbarItems = [
    { name: "Home", icon: House, to: "/" },
    { name: "Search", icon: Search, to: "/search" },
    { name: "Trending", icon: ChartNoAxesCombined, to: "/trending" },
    { name: "Favourites", icon: Heart, to: "/favourites" },
    { name: "Movies", icon: Video, to: "/movies" },
    { name: "TV Shows", icon: Monitor, to: "/tv" },
    { name: "People", icon: PersonStanding, to: "/people" }
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {navbarItems.map((curNav, index) => {
          const Icon = curNav.icon;
          return (
            <>
              <li key={index}>
                <NavLink
                  to={curNav.to}
                  className={({ isActive }) =>
                    `flex font-medium text-xl gap-2 items-center  md:text-lg ${isActive ? "text-blue-400 font-semibold" : "text-secondary-txt dark:text-secondary-txt-dark"}`
                  }
                >
                  <Icon size={20} />
                  <span>{curNav.name}</span>
                </NavLink>
              </li>
              {curNav.name.toLowerCase() === "favourites" && (
                <hr className="text-muted-txt dark:text-muted-txt-dark my-2" />
              )}
            </>
          );
        })}
      </ul>
    </nav>
  );
};
