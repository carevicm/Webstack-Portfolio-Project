import React from "react";

function SimplePromiseExample({ sampleText }) {
  return (
    <section className="text-center lg:text-lg text-[#ADB7BE]">
      <h2 className="font-bold">Simple Promise Example</h2>
      <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-4">
        In this example, we are showcasing the sample text which will be printed
        after 2 seconds if the promise resolves or print the error case if it
        rejects.
      </p>
      <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2 font-bold">
        {sampleText}
      </p>
    </section>
  );
}

export default SimplePromiseExample;
