import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
  const ContactImg = "/assets/contact-me.webp";

  return (
    <div className="flex justify-center items-center lg:justify-start lg:items-start w-full mb-4">
      <div className="lg:p-4 h-full">
        <div className="rounded-full mb-10 overflow-hidden relative">
          <Image
            src={ContactImg}
            alt="Contact Milan"
            width={250}
            height={250}
            className="object-cover object-center rounded-full"
            priority
          />
        </div>
        <div className="col-span-3 w-full h-auto lg:p-2">
          <h3 className="text-xl font-bold text-white my-2">Milan Carevic</h3>
          <p className="text-[#ADB7BE] mb-4 max-w-md">Full Stack Developer</p>
          <p className="text-[#ADB7BE] mb-6 max-w-md py-2">
            I am available for freelance or full-time positions.
            <br />
            Contact me and let&apos;s talk.
          </p>
        </div>
        <div>
          <p className="uppercase text-[#ADB7BE] text-base sm:text-lg mb-2 lg:text-xl">
            Connect With Me
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
