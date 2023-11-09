import { useState, useEffect, useCallback } from "react";
import projectsData from "../data/projectsData";

const useProjects = (initialTag = "All", projectsPerPage = 6) => {
  const [tag, setTag] = useState(initialTag);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTag = sessionStorage.getItem("selectedTag");
      const savedPage = sessionStorage.getItem("currentPage");
      if (savedTag) {
        setTag(JSON.parse(savedTag));
      }
      if (savedPage) {
        setCurrentPage(JSON.parse(savedPage));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedTag", JSON.stringify(tag));
    }
  }, [tag]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currentPage", JSON.stringify(currentPage));
    }
  }, [currentPage]);

  const getFilteredProjects = useCallback(() => {
    return projectsData.filter((project) => project.tag.includes(tag));
  }, [tag]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const currentProjects = getFilteredProjects().slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return {
    tag,
    setTag,
    currentPage,
    setCurrentPage,
    filteredProjects: currentProjects,
    totalProjects: getFilteredProjects().length,
  };
};

export default useProjects;
