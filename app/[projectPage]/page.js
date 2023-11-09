import dynamic from "next/dynamic";

import projectlist from "../data/projectsData";

const ProjectWrapper = dynamic(() => import("./ProjectWrapper.client"), {
  ssr: false,
});

export async function generateStaticParams() {
  return projectlist.map((p) => ({ projectPage: p.id.toString() }));
}

export default async function ProjectDetails({ params }) {
  const project = projectlist.find(
    (p) => p.id.toString() === params.projectPage
  );

  return (
    <div className="w-full">
      <ProjectWrapper project={project} />
    </div>
  );
}
