"use client";
import React from "react";
import SocialLink from "./SocialLink";
import useIcons from "./useIcons";

const SocialLinks = () => {
  const { icons, loading } = useIcons();
  const pdfUrl = "/pdfs/Milan-Carevic - Resume.pdf";

  const socials = [
    {
      href: "https://www.linkedin.com/in/milan-carevic/",
      label: "Milan's LinkedIn Profile",
      iconKey: "linkedin",
    },
    {
      href: "https://github.com/carevicm",
      label: "Milan's Github Profile",
      iconKey: "github",
    },
    {
      href: "mailto:milancarevic@yahoo.com",
      label: "Send Email to Milan",
      iconKey: "envelope",
    },
  ];

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center sm:justify-arround max-w-xs py-4 space-y-4 sm:space-y-0 sm:space-x-10 transition-opacity duration-1000 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex space-x-10 justify-center">
        {socials.map((social, index) => (
          <SocialLink
            key={index}
            href={social.href}
            label={social.label}
            imageSrc={icons[social.iconKey]}
          />
        ))}
      </div>
      <a
        className="w-32 sm:w-auto px-1 py-1 mb-2 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#d946ef] hover:bg-[#1e293b] text-white whitespace-nowrap"
        href={pdfUrl}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Resume - Download Milan Online Resume"
      >
        <span className="block bg-[#121212] hover:bg-[#1e293b] rounded-full px-5 py-3 text-xs sm:px-5 sm:py-3 sm:text-base">
          My Resume
        </span>
      </a>
    </div>
  );
};

export default React.memo(SocialLinks);
