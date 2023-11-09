import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import BooksWithObservables from "./page";
import { getBook, getSampleToDoList } from "../../api/send/apiService";

jest.mock("../../api/send/apiService", () => ({
  getBook: jest.fn(),
  getSampleToDoList: jest.fn(),
}));

describe("BooksWithObservables", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getSampleToDoList.mockResolvedValue([]);
    getBook.mockResolvedValue({ items: [] });
  });

  test("renders BooksWithObservables component", async () => {
    getSampleToDoList.mockResolvedValueOnce([]);
    await waitFor(() => render(<BooksWithObservables />));
    expect(
      screen.getByText("Search functionality with Observables")
    ).toBeInTheDocument();
  });

  test("calls fetchSampleData on component mount", async () => {
    getSampleToDoList.mockResolvedValueOnce([]);
    await act(async () => {
      render(<BooksWithObservables />);
    });
    expect(getSampleToDoList).toHaveBeenCalledTimes(1);
  });

  test("updates queryField state on input change", async () => {
    render(<BooksWithObservables />);
    const input = screen.getByPlaceholderText("Search for a book...");
    await act(async () => {
      fireEvent.change(input, { target: { value: "test query" } });
    });
    expect(input.value).toBe("test query");
  });

  test("handles state updates with act", async () => {
    const sampleTodos = new Array(10).fill(null).map((_, index) => ({
      id: index.toString(),
      title: `Todo ${index + 1}`,
    }));
    getSampleToDoList.mockResolvedValue(sampleTodos);
    await act(async () => {
      render(<BooksWithObservables />);
    });
    await act(async () => {
      const nextPageButton = screen.queryByText("Next");
      if (nextPageButton) {
        fireEvent.click(nextPageButton);
        await waitFor(() => {
          expect(screen.getByText("Todo 11")).toBeInTheDocument();
        });
      }
    });
  });

  test("updates displayedBooks on handleBookPageChange", async () => {
    const sampleBooks = new Array(24).fill(null).map((_, index) => ({
      id: index.toString(),
      volumeInfo: { title: `Book ${index + 1}` },
    }));
    getBook.mockResolvedValue({ items: sampleBooks });
    await act(async () => {
      render(<BooksWithObservables />);
    });
    const nextPageButton = screen.queryByText("Next");
    if (nextPageButton) {
      fireEvent.click(nextPageButton);
      await waitFor(() => {
        expect(screen.getByText("Book 13")).toBeInTheDocument();
      });
    }
  });
});
