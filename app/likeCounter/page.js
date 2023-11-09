"use client";
import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import useLikeDislike from "./useLikeDislike";
import HeaderSection from "./HeaderSection";

function LikeCounter() {
  const {
    likeCount,
    dislikeCount,
    activeBtn,
    handleLikeClick,
    handleDislikeClick,
  } = useLikeDislike();

  return (
    <section className="w-full min-h-screen bg-[#121212] p-7 mb-4 pt-20 text-white flex flex-col items-center justify-center">
      <HeaderSection />

      <div className="w-full max-w-2xl flex flex-col items-center justify-center text-white bg-gradient-to-r from-[#a9a9b5] to-[#aecff8] shadow-xl shadow-[#d1d5db] rounded-3xl overflow-hidden p-10 m-10 hover:scale-110 ease-in duration-300">
        <div className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
          Like and Dislike Counter
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 lg:space-x-20">
          <LikeButton
            onClick={handleLikeClick}
            active={activeBtn}
            count={likeCount}
          />
          <DislikeButton
            onClick={handleDislikeClick}
            active={activeBtn}
            count={dislikeCount}
          />
        </div>
      </div>
    </section>
  );
}

export default LikeCounter;
