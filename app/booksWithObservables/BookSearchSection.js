import React from "react";
import BookSearchInput from "./BookSearchInput";
import BookSearchResults from "./BookSearchResults";

function BookSearchSection({ queryField, handleInputChange, ...restProps }) {
  return (
    <div className="max-w-7xl w-full mx-auto mt-4 mb-10 flex flex-col justify-start items-start">
      <BookSearchInput
        queryField={queryField}
        handleInputChange={handleInputChange}
      />
      {queryField && queryField.trim() !== "" && (
        <BookSearchResults queryField={queryField} {...restProps} />
      )}
    </div>
  );
}

export default BookSearchSection;
