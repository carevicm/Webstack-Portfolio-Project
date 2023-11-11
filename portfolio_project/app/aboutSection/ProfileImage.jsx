import React from "react";
import Image from "next/image";

const ProfileImage = () => (
  <div className="relative mt-20 w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-96 xl:h-96 mb- sm:mb-2 md:mb-24 lg:mb-96 object-fill bg-cover rounded-3xl overflow-hidden">
  <Image
      src="/assets/about-image.webp"
      width={500}
      height={500}
      className="object-cover object-center rounded-3xl"
      priority
      alt="About me image, computer with code on the screen"
    />
  </div>
);

export default ProfileImage;
