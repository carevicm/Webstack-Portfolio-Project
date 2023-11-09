import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BooksWithPromisesPage from "./page";
import { getSampleToDoList } from "../../api/send/apiService";

jest.mock("../../api/send/apiService", () => ({
  getSampleToDoList: jest.fn(),
}));

describe("BooksWithPromisesPage", () => {
  test("displays the sample text after the promise resolves", async () => {
    getSampleToDoList.mockResolvedValueOnce([]);
    render(<BooksWithPromisesPage />);

    await waitFor(
      () => {
        expect(
          screen.getByText(/Task complete after 2 sec/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
  it("displays the sample text after the promise resolves", async () => {
    getSampleToDoList.mockResolvedValueOnce([]);
    render(<BooksWithPromisesPage />);

    await waitFor(
      () => {
        expect(
          screen.getByText(/Task complete after 2 sec/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
