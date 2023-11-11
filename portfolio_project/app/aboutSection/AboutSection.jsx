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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16 xl:px-16">
      <div className="order-1">
        <DynamicProfileImage />
      </div>
      <div className="order-2 text-left mt-4 md:mt-0">
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
