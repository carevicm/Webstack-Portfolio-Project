const ProjectCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col h-full min-h-[300px]">
      <div className="h-52 md:h-72 bg-[#181818]  rounded"></div>
      <div className="flex-grow bg-[#1e293b  rounded mt-3 p-4">
        <div className="bg-[#181818]  h-6 w-3/4 mb-4"></div>
        <div className="bg-[#181818]  h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
