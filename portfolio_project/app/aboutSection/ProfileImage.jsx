import React from "react";
import Image from "next/image";

const ProfileImage = () => (
  <div className="relative w-44 h-44 mt-20 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mb-8 sm:mb-2 md:mb-24 lg:mb-96 object-fill bg-cover rounded-full overflow-hidden">
    <Image
      src="/assets/about-image.webp"
      width={384}
      height={384}
      alt="About me image, computer with code on the screen"
      priority
    />
  </div>
);

export default ProfileImage;
