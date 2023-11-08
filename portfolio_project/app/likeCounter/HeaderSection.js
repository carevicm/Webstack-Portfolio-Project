import React from "react";

function HeaderSection() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center mt-4 mb-10">
      <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-8 mb-8">
        Like and Dislike Counter
      </h3>
      <div className="text-base lg:text-lg text-white">
        <h4 className="text-xl font-semibold">Problem Statement:</h4>
        <p className="mt-2">
          In the realm of social media and content sharing platforms, user
          feedback is paramount. Platforms often provide mechanisms for users to
          express their opinions on content, commonly through &ldquo;like&rdquo; and
          &ldquo;dislike&rdquo; buttons. Implementing an efficient and responsive system for
          this is crucial to ensure a seamless user experience.
        </p>

        <h4 className="text-xl font-semibold mt-4">Solution:</h4>
        <p className="mt-2">
          The provided code showcases a solution for this problem:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li className="mt-2">
            <span className="font-bold">Like and Dislike Buttons:</span> Two
            distinct buttons are provided for users to express their liking or
            disliking of content. These buttons are visually appealing and
            provide instant feedback.
          </li>
          <li className="mt-2">
            <span className="font-bold">Dynamic Counter:</span> Each button is
            associated with a counter that updates in real-time as users click
            on the buttons. This provides immediate feedback to other users
            about the content&apos;s reception.
          </li>
          <li className="mt-2">
            <span className="font-bold">Custom Hooks:</span> The
            `useLikeDislike` custom hook is utilized to manage the state and
            logic of the like and dislike system. This ensures a clean
            separation of concerns and makes the codebase more maintainable.
          </li>
          <li className="mt-2">
            <span className="font-bold">Responsive Design:</span> The design is
            responsive, ensuring that the feature looks and functions well
            across various device sizes.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeaderSection;
