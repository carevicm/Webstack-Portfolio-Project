import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

const AboutTextMock = () => <div>AboutText component</div>;
AboutTextMock.displayName = 'AboutText';

const ProfileImageMock = () => <div>ProfileImage component</div>;
ProfileImageMock.displayName = 'ProfileImage';

const TabsMock = ({ currentTab, onTabChange }) => (
  <div>
    <button onClick={() => onTabChange("education")}>Education Tab</button>
    <button onClick={() => onTabChange("certifications")}>
      Certifications Tab
    </button>
    <div>Tabs component with current tab: {currentTab}</div>
  </div>
);
TabsMock.displayName = 'Tabs';

jest.mock("./AboutText", () => AboutTextMock);
jest.mock("./ProfileImage", () => ProfileImageMock);
jest.mock("./Tabs", () => TabsMock);

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
