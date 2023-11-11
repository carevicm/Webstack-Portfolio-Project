import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import LoadingOverlay from "../utils/LoadingOverlay";

function ClientSideComponent({ project }) {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const router = useRouter();

  const handleBackNavigation = () => {
    console.log("Back navigation triggered");
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      console.log("Scrolling to projects section");
      projectsSection.scrollIntoView({ behavior: "smooth" });
      router.replace("/#projects", undefined, { shallow: true });
    } else {
      console.log("Navigating to /#projects");
      router.push("/#projects");
    }
  };

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  if (!isComponentMounted || router.isFallback) {
    return <LoadingOverlay />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    loading: "lazy",
  };

  return (
    <div className="w-full text-white">
      <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] relative bg-cover bg-center">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-opacity duration-700 ease-in-out"
            style={imageStyle}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-0 right-0 ml-6 mt-6 p-4 sm:p-8 md:p-8 transform -translate-y-1/2 z-10 text-start sm:text-start">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mx-4">
            {project.title}
          </h1>
          <h2 className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2 font-semibold mx-4">
            {project.skills}
          </h2>
        </div>
      </div>
      <div className="max-w-full mx-auto ml-10 mr-10 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-grow max-w-7xl lg:max-w-7xl">
          <div className="flex flex-row justify-between items-center mb-4">
            <span
              onClick={handleBackNavigation}
              className="mt-8 mb-8 text-center px-2 sm:px-2 py-3 sm:py-3 rounded-3xl bg-gradient-to-r from-[#4f74a1] to-[#60a5fa] shadow-sm shadow-[#d1d5db] text-white font-bold text-md sm:text-lg cursor-pointer transition-all duration-700 ease-in-out"
            >
              Go Back
            </span>
          </div>
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-8 mb-12">
            Project Overview
          </h3>
          <p className="text-lg md:text-md lg:text-2xl  font-semibold">
            {project.description}
          </p>
          <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-4">
            {project.text}
          </div>
          <h4 className="text-lg md:text-md lg:text-2xl  font-semibold mt-12">
            Features
          </h4>
          <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-4 mb-8">
            {project.features.map((feature, index) => {
              const [title, description] = feature.split(/:(.+)/);
              return (
                <div key={index} className="mb-2">
                  <span className="font-bold">{title}:</span>
                  <span>{description}</span>
                </div>
              );
            })}
          </div>
          <div className="mb-6 flex gap-4">
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noreferrer"
              className="text-center px-5 sm:px-5 py-3 sm:py-3 rounded-3xl bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-bold text-md sm:text-lg cursor-pointer transition-all duration-700 ease-in-out"
            >
              Code
            </a>
            {project.previewUrl && project.previewUrl !== "/" && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center px-4 sm:px-4 py-3 sm:py-3 rounded-3xl bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-bold text-md sm:text-lg cursor-pointer transition-all duration-700 ease-in-out"
              >
                Demo
              </a>
            )}
          </div>
        </div>
        <div className="flex-none w-full sm:w-auto max-w-xs mx-auto mt-8 mb-8">
          <div className="flex flex-col items-start md:items-start sm:items-start bg-gradient-to-r text-black from-[#a1a1aa] to-[#93c5fd] shadow-lg shadow-[#d1d5db] rounded-3xl hover:scale-105 ease-in duration-300">
            <div className="p-4">
              <p className="p-3 text-lg font-bold pb-2">Technologies</p>
              <div className="flex flex-col gap-2 p-2">
                {project.techskills &&
                  project.techskills.map((tech, index) => (
                    <div key={index} className="p-2">
                      {tech}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSideComponent;
