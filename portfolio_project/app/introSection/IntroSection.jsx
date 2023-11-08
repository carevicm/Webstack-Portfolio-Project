"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1 className="text-white mb-1 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a1a1aa] to-[#60a5fa]">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <div className="min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[200px]">
            <TypeAnimation
              sequence={[
                "Milan",
                1000,
                "Front End Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </h1>
      </motion.div>
      <p className="min-h-[24px] sm:min-h-[28px] lg:min-h-[32px] text-[#ADB7BE] text-xs sm:text-base mb-2 lg:text-xl pt-2">
        LET&apos;S BUILD SOMETHING TOGETHER
      </p>
    </div>
  );
};

export default React.memo(IntroSection);
