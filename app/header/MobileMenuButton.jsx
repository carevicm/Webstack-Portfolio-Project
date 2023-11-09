import React, { useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const MobileMenuButton = ({ navbarOpen, toggleNavbar }) => {
  const handleClick = useCallback(() => {
    toggleNavbar();
  }, [toggleNavbar]);

  const Icon = navbarOpen ? XMarkIcon : Bars3Icon;
  const ariaLabel = navbarOpen ? "Close menu" : "Open menu";

  return (
    <div className="mobile-menu absolute top-5 right-6 block md:hidden">
      <button
        onClick={handleClick}
        className="flex items-center px-3 py-2 border rounded border-[#33353F] text-[#33353F] hover:text-white hover:border-white"
        aria-label={ariaLabel}
      >
        <Icon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MobileMenuButton;
