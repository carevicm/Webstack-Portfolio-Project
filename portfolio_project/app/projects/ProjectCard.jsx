// ProjectCard.jsx
import React from "react";
import dynamic from "next/dynamic";

const DynamicProjectImage = dynamic(() => import("./ProjectImagePage"), {
  ssr: false,
});

const DynamicProjectInfo = dynamic(() => import("./ProjectInfo"), {
  ssr: false,
});

const ProjectCard = React.memo(
  ({ id, imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
      <div className="flex flex-col h-full">
        <DynamicProjectImage imgUrl={imgUrl} title={title} id={id} />
        <DynamicProjectInfo
          title={title}
          description={description}
          gitUrl={gitUrl}
          previewUrl={previewUrl}
        />
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
