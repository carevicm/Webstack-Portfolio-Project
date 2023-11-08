import React from "react";

function HeaderSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center mt-4 mb-10">
      <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-8 mb-8">
        Search functionality with Observables
      </h1>
      <div className="text-white">
        <h2 className="text-lg md:text-md lg:text-2xl  font-semibold">
          Problem Statement:
        </h2>
        <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
          When users search for books, we don't want to send a request to the
          server immediately after each keystroke. This can lead to unnecessary
          server load and a suboptimal user experience. Instead, we want to
          delay the request slightly to ensure the user has finished typing
          their query. This is where Observables come into play.
        </p>
        <h2 className="text-lg md:text-md lg:text-2xl mt-4 font-semibold">
          Solution:
        </h2>
        <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
          To achieve this, we can use the debounceTime and distinctUntilChanged
          operators from RxJS.
        </p>
        <ul className="list-disc pl-5 xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
          <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
            <strong>debounceTime:</strong> This operator emits the latest value
            and helps in delaying the values transmitted by the root Observable
            for the specified time. This means if the user is typing a word, it
            won't send a request until a certain time has passed since the last
            keystroke.
          </li>
          <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
            <strong>distinctUntilChanged:</strong> This operator ensures that
            only unique consecutive values are emitted. This prevents redundant
            requests if the user types a letter and then deletes it.
          </li>
          <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
            <strong>finalize:</strong> This operator can be used to handle any
            final operations, like stopping a loader, regardless of whether the
            observable completes successfully or fails.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeaderSection;
