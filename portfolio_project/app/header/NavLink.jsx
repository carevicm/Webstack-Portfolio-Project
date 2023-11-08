import React from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const NavLink = ({ link, isActive, toggleDropdown, closeMenu, shouldHide }) => {
  const hasDropdown = Array.isArray(link.links);
  const linkClass = shouldHide ? "hidden" : "block";

  return (
    <li className={`relative group ${linkClass}`}>
      {hasDropdown ? (
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer focus:outline-none"
          aria-haspopup="true"
          aria-expanded={isActive ? "true" : "false"}
        >
          {link.title}
          {isActive ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </button>
      ) : (
        <Link href={link.path}>
          <span
            onClick={closeMenu}
            className="block py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
          >
            {link.title}
          </span>
        </Link>
      )}
      {hasDropdown && isActive && (
        <ul className={`absolute left-0 w-32 bg-[#121212] mt-1`}>
          {link.links.map((subLink, subIndex) => (
            <li key={subLink.id || subIndex} className="w-full">
              <Link href={subLink.path}>
                <span
                  onClick={closeMenu}
                  className="block py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded hover:text-white cursor-pointer"
                >
                  {subLink.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
