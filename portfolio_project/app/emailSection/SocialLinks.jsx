import React, { useState, useEffect } from "react";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const [icons, setIcons] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const github = (await import("../../public/github.webp")).default;
        const linkedin = (await import("../../public/linkedin.webp")).default;
        const envelope = (await import("../../public/envelope-regular.webp"))
          .default;
        setIcons({ github, linkedin, envelope });
      } catch (error) {
        console.error("Error loading icons:", error);
      }
      setLoading(false);
    };

    loadIcons();
  }, []);

  const socialLinks = [
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
      className={`flex justify-center space-x-6 md:space-x-24 mt-4 transition-opacity duration-1000 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          label={link.label}
          iconSrc={icons[link.iconKey]}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
