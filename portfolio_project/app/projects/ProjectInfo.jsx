import React from "react";
import ProjectLinks from "./ProjectLinks";

const ProjectInfo = ({ title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex-grow text-white rounded-xl mt-3 bg-[#181818] py-2 px-2 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-[#ADB7BE] mb-4 sm:mb-0">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <ProjectLinks gitUrl={gitUrl} previewUrl={previewUrl} />
      </div>
    </div>
  );
};

export default ProjectInfo;
