// SkillCard.jsx
import Image from "next/image";
import React from "react";

const SkillCard = React.memo(({ src, label, priority }) => (
  <div className="p-4 md:p-6 bg-gradient-to-r from-[#a1a1aa] to-[#93c5fd] shadow-xl shadow-[#d1d5db] rounded-xl hover:scale-105 ease-in duration-300">
  <div className="flex flex-col items-center justify-center text-lg xl:text-lg lg:text-md md:text-xs sm:text-sm font-semibold text-[#27272a] hover:text-white">
    <div className="flex justify-center items-center">
      <Image
        src={src}
        alt={label}
        width={70}
        height={70}
        className="object-cover"
        quality={80}
        priority={priority}
      />
    </div>
    <h3 className="mt-2">{label}</h3>
  </div>
</div>
));

SkillCard.displayName = 'SkillCard';

export default SkillCard;
