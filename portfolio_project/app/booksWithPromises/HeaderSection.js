import React from "react";

function HeaderSection({ sampleText }) {
  return (
    <section className="max-w-7xl w-full mx-auto mt-4 mb-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white mt-8 mb-8">
          Books With Promises
        </h3>
        <div className="text-base lg:text-lg text-white">
          <h4 className="text-lg md:text-md lg:text-2xl  font-semibold">
            Problem Statement:
          </h4>
          <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
            In modern web applications, handling asynchronous operations
            efficiently is crucial. Whether it's fetching data from an API or
            waiting for a certain operation to complete, promises in JavaScript
            provide a way to handle these asynchronous operations. However,
            using them effectively requires understanding their behavior and
            potential pitfalls.
          </p>

          <h4 className="text-lg md:text-md lg:text-2xl  font-semibold mt-4">
            Solution:
          </h4>
          <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
            In the provided code, we utilize JavaScript promises to handle
            asynchronous operations:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
              <span className="font-bold">Simple Promise:</span> We've created a
              promise that resolves after a 2-second delay, simulating an
              asynchronous operation. This is showcased below where the resolved
              value of the promise is displayed.
            </li>
            <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
              <span className="font-bold">Fetching Data:</span> The "Sample Todo
              List" component demonstrates fetching data using promises. When
              the data is fetched, it's displayed in a paginated table. This
              ensures efficient data handling and a smooth user experience.
            </li>
            <li className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
              <span className="font-bold">Window Resize Listener:</span> The
              code also demonstrates the use of the useEffect hook to handle
              window resize events, ensuring the UI adapts to different window
              sizes.
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-lg text-white mt-8">
          <h3 className="text-lg md:text-md lg:text-2xl  font-bold">
            Simple Promise Example
          </h3>
          <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-4">
            In this example, we are showcasing the sample text which will be
            printed after 2 seconds <br /> if the promise resolves or print the
            error case if it rejects
          </p>
          <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg font-bold mt-4">
            {sampleText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
