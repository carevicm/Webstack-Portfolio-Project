"use client";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import useProjects from "./useProjects";


import Pagination from "../utils/PaginationProject";
const ProjectCardSkeleton = dynamic(() => import("./ProjectCardSkeleton"), { ssr: false });
const ProjectCard = dynamic(() => import("./ProjectCard"), { ssr: false });
const ProjectTag = dynamic(() => import("./ProjectTag"), { ssr: false });

const ProjectsSection = () => {
  const {
    tag,
    setTag,
    currentPage,
    setCurrentPage,
    filteredProjects,
    totalProjects,
  } = useProjects();

  const [isLoading, setIsLoading] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  const handleTagChange = useCallback(
    (newTag) => {
      setTag(newTag);
      setCurrentPage(1);
    },
    [setTag, setCurrentPage]
  );

  const paginate = useCallback(
    (pageNumber) => {
      setCurrentPage(pageNumber);
    },
    [setCurrentPage]
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const transitionTimer = setTimeout(() => {
        setShowProjects(true);
      }, 300);
      return () => clearTimeout(transitionTimer);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Future"
          isSelected={tag === "Future"}
        />
      </div>
      <div className={isLoading ? "animate-fade-in-out" : ""}>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-4 grid-auto-rows-minmax">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <ProjectCardSkeleton key={index} />)
            : filteredProjects.map((project) => (
                <li
                  key={project.id}
                  className={showProjects ? "animate-fade-in" : ""}
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                  />
                </li>
              ))}
        </ul>
      </div>
      <Pagination
        projectsPerPage={6}
        totalProjects={totalProjects}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export { useProjects, ProjectsSection };
