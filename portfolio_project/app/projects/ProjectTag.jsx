import React from "react";

const ProjectTag = React.memo(({ name, onClick, isSelected }) => {
  const baseStyles =
    "rounded-full border-2 transition-all duration-300 cursor-pointer";
  const buttonStyles = isSelected
    ? "text-white border-[#a1a1aa] bg-gradient-to-br from-[#6d28d9] to-[#d946ef] hover:bg-[#1e293b]"
    : "text-[#ADB7BE] border-[#52525b] hover:border-white";

  const responsiveStyles =
    "text-base sm:text-xl px-4 sm:px-6 py-2 sm:py-3 min-w-[100px] sm:min-w-[120px]";

  return (
    <button
      className={`${baseStyles} ${buttonStyles} ${responsiveStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
});

ProjectTag.displayName = "ProjectTag";
export default ProjectTag;
