"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import useIntersectionObserver from "./useIntersectionObserver";

const ProjectImage = React.memo(({ imgUrl, title, id }) => {
  const imageRef = useRef(null);
  const isVisible = useIntersectionObserver(imageRef);

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div className="h-52 md:h-72 relative group" ref={imageRef}>
      {isVisible && (
        <Image
          src={imgUrl}
          alt={title}
          width={500}
          height={250}
          priority={true}
          className="transition-opacity duration-700 ease-in-out"
          style={imageStyle}
        />
      )}
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700 ease-in-out items-center justify-center z-10">
        <Link href={`/${id}`}>
          <span
            aria-label={`More about ${title}`}
            role="link"
            tabIndex={0}
            className="text-center p-3 rounded-3xl bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-bold text-md sm:text-sm cursor-pointer transition-all duration-700 ease-in-out relative"
          >
            <span className="absolute inset-0 overflow-hidden opacity-0">
              More about {title}
            </span>
            More Info
          </span>
        </Link>
      </div>
    </div>
  );
});

ProjectImage.displayName = 'ProjectImage';
export default ProjectImage;
