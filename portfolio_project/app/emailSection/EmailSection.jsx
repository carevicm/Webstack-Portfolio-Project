"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicProfileCard = dynamic(() => import("./ProfileCard"), {
  ssr: false,
});

const DynamicEmailForm = dynamic(() => import("./EmailForm"), {
  ssr: false,
});

const EmailSection = () => {
  const [emailSuccess, setEmailSuccess] = useState(false);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-2 my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4d4d8] to-[#60a5fa] rounded-full h-60 w-60 z-0 blur-lg absolute top-[90%] left-4 transform -translate-x-1/2 -translate-y-[10%]"></div>
        <div className="z-10">
          <DynamicProfileCard />
        </div>
        <div className="z-10">
          <DynamicEmailForm setEmailSuccess={setEmailSuccess} />
          {emailSuccess && (
            <p className="text-white text-center mt-4">Message Sent!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EmailSection;
