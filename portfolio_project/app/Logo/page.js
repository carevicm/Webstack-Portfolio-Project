import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <video
        className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/assets/logo.webm" type="video/webm" />
        <img src="/assets/logo.webp" alt="Logo" />
      </video>
    </div>
  );
};

export default React.memo(Logo);
