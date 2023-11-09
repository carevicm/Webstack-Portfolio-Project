import React from "react";

function BookSearchInput({ queryField, handleInputChange }) {
  return (
    <section className="w-full flex flex-col">
      <h2 className="text-center text-lg md:text-xl lg:text-3xl font-bold text-white justify-center items-center mt-4 mb-8 md:mb-12">
        Search to know more about your favourite books
      </h2>
      <input
        value={queryField}
        onChange={handleInputChange}
        id="keyword"
        type="search"
        placeholder="Search for a book..."
        className="w-full h-14 rounded-full px-5 text-black border justify-start items-start border-purple-500 shadow-sm focus:ring focus:ring-opacity-50"
      />
    </section>
  );
}

export default BookSearchInput;
