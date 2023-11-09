"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo/page";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Resources",
    links: [
      {
        title: "Books with Observables",
        path: "/booksWithObservables",
      },
      {
        title: "Books with Promises",
        path: "/booksWithPromises",
      },
      {
        title: "Like Counter",
        path: "/likeCounter",
      },
    ],
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-2 py-2">
        <Logo />
        <MobileMenuButton navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
        <DesktopNav
          navLinks={navLinks}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          dropdownRef={dropdownRef}
        />
      </div>
      {navbarOpen && (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;
