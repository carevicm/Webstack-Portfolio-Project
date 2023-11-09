import React from "react";
import Image from "next/image";

import githubImage from "../../public/github.webp";
import linkImage from "../../public/link-solid.webp";

const ProjectLinks = React.memo(({ gitUrl, previewUrl }) => {
  return (
    <div className="flex space-x-4 items-center">
      <a
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="bg-gray-400 p-2 rounded-full hover:bg-gray-600"
        style={{ width: "40px", height: "40px" }}
      >
        <Image src={githubImage} alt="GitHub" className="object-cover" />
      </a>
      <a
        href={previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Project Preview"
        className="bg-gray-400 p-2 rounded-full hover:bg-gray-600"
        style={{ width: "40px", height: "40px" }}
      >
        <Image src={linkImage} alt="Project Link" className="object-cover" />
      </a>
    </div>
  );
});

ProjectLinks.displayName = "ProjectLinks";
export default ProjectLinks;
