import React from "react";
import Image from "next/image";

const SocialLink = ({ href, label, iconSrc }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-full bg-gradient-to-r from-[#d4d4d8] to-[#60a5fa] shadow-sm shadow-[#d1d5db] p-3 cursor-pointer hover:scale-110 ease-in duration-300"
      style={{ width: "46px", height: "46px" }}
    >
      {iconSrc && (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={iconSrc}
            alt={label}
            width={22}
            height={22}
            className="object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      )}
    </a>
  );
};

export default SocialLink;
