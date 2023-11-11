import React from "react";
import Image from "next/image";

const ProfileImage = () => (
  <div className="relative mt-20 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mb- sm:mb-2 md:mb-24 lg:mb-96 object-fill bg-cover rounded-3xl overflow-hidden">
    <Image
      src="/assets/about-image.webp"
      width={250}
      height={250}
      className="object-cover object-center rounded-3xl"
      priority
      alt="About me image, computer with code on the screen"
    />
  </div>
);

export default ProfileImage;
