import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Logo from "../Logo/page";

const Footer = () => {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  const logoStyle = {
    width: "100px",
    height: "60px",
    display: "inline-block",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-auto">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="logo" style={logoStyle}>
          <Logo />
        </div>
        <p className="text-center lg:text-left text-primary-300">
          © Copyright {currentYear} - {footerCopy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
