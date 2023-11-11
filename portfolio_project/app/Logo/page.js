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
        aria-label="Animated rotating logo with CM letters for Personal Portfolio Website"
      >
        <source src="/assets/logo.webm" type="video/webm" />
        <source src="/assets/logo.mp4" type="video/mp4" />
        <img src="/assets/logo.webp" alt="Logo" />
        <img src="/assets/logo.png" alt="Logo" />
      </video>
    </div>
  );
};
export default React.memo(Logo);
