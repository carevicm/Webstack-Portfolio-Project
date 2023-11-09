"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicAboutText = dynamic(() => import("./AboutText"));
const DynamicProfileImage = dynamic(() => import("./ProfileImage"), {
  ssr: false,
  loading: () => <div style={{ width: "320px", height: "320px" }}></div>,
});
const DynamicTabs = dynamic(() => import("./Tabs"), {
  loading: () => <div style={{ minHeight: "200px" }}></div>,
});

const AboutSection = () => {
  const [tab, setTab] = useState("education");

  return (
    <section className="text-white mb-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-2 px-2 xl:gap-12 sm:py-12 xl:px-12">
        <div className="min-w-[320px] min-h-[320px]">
          <DynamicProfileImage />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <DynamicAboutText />
          <div className="min-h-[300px] transition-all duration-300">
            <DynamicTabs currentTab={tab} onTabChange={setTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
