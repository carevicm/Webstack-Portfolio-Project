import React, { useCallback } from "react";
import dynamic from "next/dynamic";

const TabButton = dynamic(() => import("./TabButton"), {
  ssr: false,
});

const TAB_DATA = {
  education: {
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
       {/* <li>Centennial College, Toronto, ON</li>
        <li className="list-none">
          Advanced Diploma in Software Engineering Technology - AI
    </li> */}
        <li>Arbutus College, Vancouver, BC</li>
        <li className="list-none">
          College Diploma in Computer Science and Frontend Web Development
        </li>
      </ul>
    ),
  },
  certifications: {
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analyst DP-900: Microsoft Azure Data Fundamentals</li>
        <li>AI Practitioner AI-900: Microsoft Azure AI Fundamentals</li>
      </ul>
    ),
  },
};

const Tabs = ({ currentTab, onTabChange }) => {
  const handleTabChange = useCallback(
    (newTab) => {
      onTabChange(newTab);
    },
    [onTabChange]
  );

  return (
    <div>
      <div className="flex flex-row justify-start mt-8">
        {Object.keys(TAB_DATA).map((tabKey) => (
          <TabButton
            key={tabKey}
            selectTab={() => handleTabChange(tabKey)}
            active={currentTab === tabKey}
          >
            {TAB_DATA[tabKey].title}
          </TabButton>
        ))}
      </div>
      <div className="transition-all duration-900">
        {TAB_DATA[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
