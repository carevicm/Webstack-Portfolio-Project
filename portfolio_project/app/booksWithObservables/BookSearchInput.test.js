import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookSearchInput from "./BookSearchInput";

describe("BookSearchInput", () => {
  test("renders BookSearchInput component", () => {
    render(<BookSearchInput queryField="" handleInputChange={() => {}} />);
    expect(
      screen.getByPlaceholderText("Search for a book...")
    ).toBeInTheDocument();
  });

  test("calls handleInputChange on input change", () => {
    const handleInputChange = jest.fn();
    render(
      <BookSearchInput queryField="" handleInputChange={handleInputChange} />
    );
    fireEvent.change(screen.getByPlaceholderText("Search for a book..."), {
      target: { value: "Harry Potter" },
    });
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});
