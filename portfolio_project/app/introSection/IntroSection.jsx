"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a1a1aa] to-[#60a5fa]"
        >
          Hello, I&apos;m{" "}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center"
        >
          <div className="min-h-[100px] sm:min-h-[140px] md:min-h-[150px] lg:min-h-[200px] mt-6 mb-2">
            <TypeAnimation
              sequence={[
                "Milan", 2000,
                "Front End Developer", 1000,
                "Web Developer", 1000,
                "Mobile Developer", 1000,
                "Full Stack Developer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>
      </h1>
      <p className="min-h-[24px] sm:min-h-[28px] lg:min-h-[32px] text-[#ADB7BE] justify-center items-center text-xs sm:text-base mb-2 lg:text-xl">
        LET&apos;S BUILD FUTURE TOGETHER
      </p>
    </div>
  );
};

export default React.memo(IntroSection);
