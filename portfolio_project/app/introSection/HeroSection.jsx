import React from "react";
import dynamic from "next/dynamic";

const DynamicIntroSection = dynamic(() => import("./IntroSection"));
const DynamicSocialLinks = dynamic(() => import("./SocialLinks"));

const HeroSection = React.memo(() => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center sm:item sm:justify-center mb-0 pb-0">
      <div className="max-w-7xl w-full mx-auto p-2 flex flex-col justify-center items-center sm:items-center md:items-center text-center">
        <DynamicIntroSection />
        <DynamicSocialLinks />
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';

export default HeroSection;
