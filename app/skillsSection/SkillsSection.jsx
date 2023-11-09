"use client";
import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicSkillCard = dynamic(() => import("./SkillCard"), {});

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function loadSkills() {
      const skillsData = (await import("./SkillsData")).default;
      setSkills(skillsData);
    }

    loadSkills();
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2 mb-32 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
          Skillset Showcase
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 ">
          {skills.map((skill, index) => (
            <DynamicSkillCard
              key={skill.label}
              {...skill}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
