import React from "react";
import { BiSolidLike } from "react-icons/bi";

function LikeButton({ active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-28 h-28 flex items-center justify-center p-2 shadow-xl shadow-[#d1d5db] cursor-pointer hover:scale-110 ease-in duration-300 outline-none focus:ring-0 ${
        active === "like" ? "bg-[#28a745]" : "bg-[#192861]"
      }`}
    >
      <BiSolidLike size={25} className="mr-2" />
      Like <br />
      {count}
    </button>
  );
}

export default LikeButton;
