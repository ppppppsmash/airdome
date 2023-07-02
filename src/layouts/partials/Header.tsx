"use client";

import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TranslateButton from "@/components/TranslateButton";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { settings } = config;
  // get current path
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false); 

  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden transform" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li
                  className="nav-item nav-dropdown group relative"
                >
                  <span
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <a
                          href={child.url}
                          className={`nav-dropdown-link block ${
                            (pathname === `${child.url}/` ||
                              pathname === child.url) &&
                            "active border-b-4 border-white dark:border-gray-950"
                          }`}
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  className="nav-item"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <a
                    href={menu.url}
                    className={`nav-link block ${
                      (pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active border-b-4 border-gray-950 dark:border-white transition-all duration-450"
                    }`}
                    style={
                      (pathname === `${menu.url}/` || pathname === menu.url)
                        ? {
                            transition: 'border-width 0.3s ease-in-out',
                            borderBottomWidth: '4px',
                          }
                        : {}
                    }
                  >
                    {menu.name}
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <TranslateButton />
          <ThemeSwitcher className="mr-5" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
