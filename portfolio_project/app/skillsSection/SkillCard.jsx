// SkillCard.jsx
import Image from "next/image";
import React from "react";

const SkillCard = React.memo(({ src, label, priority }) => (
  <div className="p-4 md:p-6 bg-gradient-to-r from-[#a1a1aa] to-[#93c5fd] shadow-xl shadow-[#d1d5db] rounded-xl hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 justify-center items-center text-lg xl:text-lg lg:text-md md:text-xs sm:text-sm font-semibold text-[#27272a] hover:text-white">
      <div className="flex m-auto justify-center">
        <Image
          src={src}
          alt={label}
          width={70}
          height={70}
          className="w-full object-cover h-auto"
          quality={80}
          priority={priority}
        />
      </div>
      <div className="flex-col items-center justify-center hidden sm:block">
        <h3>{label}</h3>
      </div>
    </div>
  </div>
));

export default SkillCard;
