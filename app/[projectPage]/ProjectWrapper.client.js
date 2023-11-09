"use client";
import { useState, useEffect } from "react";
import ClientSideComponent from "./ClientSideComponent.client";

function ProjectWrapper({ project }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <ClientSideComponent project={project} /> : null;
}

export default ProjectWrapper;
