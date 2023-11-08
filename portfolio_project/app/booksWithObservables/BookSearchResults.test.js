import React from "react";
import { render, screen } from "@testing-library/react";
import BookSearchResults from "./BookSearchResults";

describe("BookSearchResults", () => {
  const mockBooks = [
    {
      id: "1",
      volumeInfo: {
        title: "Book Title 1",
        authors: ["Author 1"],
        imageLinks: { thumbnail: "http://example.com/image1.jpg" },
      },
    },
  ];

  const mockTruncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  test("renders BookSearchResults component with books", () => {
    render(
      <BookSearchResults
        displayedBooks={mockBooks}
        items={mockBooks}
        itemsPerPage={10}
        truncateText={mockTruncateText}
      />
    );
    expect(screen.getByText("Book Title 1")).toBeInTheDocument();
    expect(screen.getByAltText("Book Title 1")).toHaveAttribute(
      "src",
      "http://example.com/image1.jpg"
    );
  });
});
