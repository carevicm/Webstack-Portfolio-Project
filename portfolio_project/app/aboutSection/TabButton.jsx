import React, { memo } from "react";

const TabButton = memo(({ active, selectTab, children }) => {
  const textStyle = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      className="focus:outline-none hover:bg-opacity-10 hover:bg-[#1e293b] p-2 rounded"
    >
      <span className={`mr-3 font-semibold hover:text-white ${textStyle}`}>
        {children}
      </span>
      <div
        className={`h-1 bg-[#93c5fd] mt-2 mr-3 bg-gradient-to-br from-[#6d28d9] to-[#d946ef] hover:bg-[#1e293b] transition-width duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
});

export default TabButton;
