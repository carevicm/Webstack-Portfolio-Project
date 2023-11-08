import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

jest.mock("./AboutText", () => () => <div>AboutText component</div>);
jest.mock("./ProfileImage", () => () => <div>ProfileImage component</div>);
jest.mock("./Tabs", () => ({ currentTab, onTabChange }) => (
  <div>
    <button onClick={() => onTabChange("education")}>Education Tab</button>
    <button onClick={() => onTabChange("certifications")}>
      Certifications Tab
    </button>
    <div>Tabs component with current tab: {currentTab}</div>
  </div>
));

describe("AboutSection", () => {
  it("renders without crashing", async () => {
    render(<AboutSection />);

    await waitFor(() => {
      expect(screen.getByText("AboutText component")).toBeInTheDocument();
      expect(screen.getByText("ProfileImage component")).toBeInTheDocument();
      expect(
        screen.getByText("Tabs component with current tab: education")
      ).toBeInTheDocument();
    });
  });

  it("initial tab is set to education", async () => {
    render(<AboutSection />);

    await waitFor(() => {
      expect(
        screen.getByText("Tabs component with current tab: education")
      ).toBeInTheDocument();
    });
  });

  it("can switch to certifications tab", async () => {
    render(<AboutSection />);

    fireEvent.click(screen.getByText("Certifications Tab"));

    await waitFor(() => {
      expect(
        screen.getByText("Tabs component with current tab: certifications")
      ).toBeInTheDocument();
    });
  });
});
