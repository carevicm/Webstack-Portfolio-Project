import React from "react";
import { BiSolidDislike } from "react-icons/bi";

function DislikeButton({ active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-28 h-28 flex items-center justify-center p-2 shadow-xl shadow-[#d1d5db] cursor-pointer hover:scale-110 ease-in duration-300 outline-none focus:ring-0 ${
        active === "dislike" ? "bg-[#ed4a4a]" : "bg-[#192861]"
      }`}
    >
      <BiSolidDislike size={25} className="mr-2" />
      Dislike {count}
    </button>
  );
}

export default DislikeButton;
