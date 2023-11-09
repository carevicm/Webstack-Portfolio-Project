import React from "react";
import { render, screen } from "@testing-library/react";
import BookSearchSection from "./BookSearchSection";

describe("BookSearchSection", () => {
  test("renders BookSearchSection component", () => {
    render(<BookSearchSection queryField="" handleInputChange={() => {}} />);
    expect(
      screen.getByText("Search to know more about your favourite books")
    ).toBeInTheDocument();
  });
});
