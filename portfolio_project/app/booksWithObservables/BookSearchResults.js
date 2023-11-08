import React from "react";
import Pagination from "../utils/PaginationsBooks";

function BookSearchResults({
  displayedBooks,
  currentBookPage,
  booksPerPage,
  handleBookPageChange,
  items,
  itemsPerPage,
  expandedBookId,
  handleReadMore,
  truncateText,
}) {
  return (
    <section className="book-search-results w-full">
      <div className="mt-4 w-full">
        {displayedBooks.length > 0 && (
          <div className="mt-5 w-full">
            <div className="flex flex-wrap -m-2">
              {displayedBooks.map((book) => {
                const originalTitle = book.volumeInfo.title;
                const truncatedTitle = truncateText(originalTitle, 50);
                const originalAuthors = book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "";
                const truncatedAuthors = truncateText(originalAuthors, 50);

                const shouldShowReadMore =
                  originalTitle !== truncatedTitle ||
                  originalAuthors !== truncatedAuthors;

                return (
                  <div key={book.id} className="w-1/4 p-2 mb-4 book-card">
                    <div className="book-thumbnail flex justify-center items-center h-48">
                      {book.volumeInfo.imageLinks && (
                        <img
                          src={book.volumeInfo.imageLinks.thumbnail}
                          alt={book.volumeInfo.title}
                          className="max-h-full"
                        />
                      )}
                    </div>
                    <div className="book-details relative">
                      <div className="hidden md:block">
                        <p className="book-authors">{truncatedAuthors}</p>
                        <h3 className="book-title">
                          {expandedBookId === book.id
                            ? originalTitle
                            : truncatedTitle}
                        </h3>
                        {shouldShowReadMore && (
                          <button
                            onClick={() => handleReadMore(book.id)}
                            className="text-[#93c5fd] hover:underline p-2 mt-0.5"
                          >
                            {expandedBookId === book.id
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </div>
                      <div className="md:hidden">
                        <button
                          onClick={() => handleReadMore(book.id)}
                          className="text-[#93c5fd] hover:underline p-2 mt-0.5"
                        >
                          {expandedBookId === book.id
                            ? "Read Less"
                            : "Read More"}
                        </button>
                        {expandedBookId === book.id && (
                          <div>
                            <p className="book-authors">{originalAuthors}</p>
                            <h3 className="book-title">{originalTitle}</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 text-center w-full">
        {items.length > itemsPerPage && (
          <Pagination
            currentPage={currentBookPage}
            totalPages={Math.ceil(items.length / booksPerPage)}
            onPageChange={handleBookPageChange}
          />
        )}
      </div>
    </section>
  );
}

export default BookSearchResults;
