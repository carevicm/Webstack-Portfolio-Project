import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import LoadingOverlay from "../utils/LoadingOverlay";

function ClientSideComponent({ project }) {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const router = useRouter();

  const handleBackNavigation = (e) => {
    e.preventDefault();
    const hash = "/#projects";
    if (hash && hash.startsWith("#")) {
      router.push(hash).then(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      // Regular navigation
      router.push(hash);
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
  };

  return (
    <div className="w-full text-white">
      <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] relative bg-cover bg-center">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           
            priority={true}
            className="transition-opacity duration-700 ease-in-out"
            style={imageStyle}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 ml-10 mt-6 p-4 sm:p-8 md:p-8 transform -translate-y-1/2 z-10">
          <h1 className="text-lg sm:text-md md:text-xl lg:text-3xl font-bold mb-4">
            {project.title}
          </h1>
          <h2 className="text-lg sm:text-sm md:text-md lg:text-xl font-semibold">
            {project.skills}
          </h2>
        </div>
      </div>
      <div className="max-w-full mx-auto ml-10 mr-10 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-grow max-w-7xl lg:max-w-7xl">
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-8 mb-8">
            Project Overview
          </h3>
          <p className="text-lg md:text-md lg:text-2xl  font-semibold mb-4">
            {project.description}
          </p>
          <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg mb-6 ">
            {project.text}
          </div>
          <h4 className="text-lg md:text-md lg:text-2xl  font-semibold mb-4">
            Features
          </h4>
          <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg mb-6">
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
              className="text-center px-4 sm:px-6 py-2 sm:py-3 rounded-3xl bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-bold text-md sm:text-lg cursor-pointer transition-all duration-700 ease-in-out"
            >
              Code
            </a>
            {project.previewUrl && project.previewUrl !== "/" && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center px-4 sm:px-6 py-2 sm:py-3 rounded-3xl bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-bold text-md sm:text-lg cursor-pointer transition-all duration-700 ease-in-out"
              >
                Demo
              </a>
            )}
          </div>
          <span
            onClick={handleBackNavigation}
            className="mt-6 p-2 text-[#93c5fd] hover:text-[#6ca2e0] cursor-pointer"
          >
            Go Back
          </span>
        </div>
        <div className="flex-none w-full md:w-auto max-w-1/2 sm:max-w-full pl-10">
          <div className="flex flex-col bg-gradient-to-r text-black from-[#a1a1aa] to-[#93c5fd] shadow-lg shadow-[#d1d5db] rounded-3xl hover:scale-105 ease-in duration-300">
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
