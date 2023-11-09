import { render, screen, fireEvent } from "@testing-library/react";
import ClientSideComponent from "./ClientSideComponent.client";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../utils/LoadingOverlay", () => {
  return function DummyLoadingOverlay() {
    return <div>Loading...</div>;
  };
});

describe("ClientSideComponent", () => {
  const mockProject = {
    title: "Test Project",
    skills: "React, Next.js",
    description: "This is a test project.",
    text: "Project details go here.",
    features: ["Feature 1: Description", "Feature 2: Description"],
    image: "/test-image.jpg",
    gitUrl: "https://github.com",
    previewUrl: "https://previewurl.com",
    techskills: ["React", "Next.js"],
  };

  it("renders the loading overlay when the component is not mounted", () => {
    useRouter.mockImplementation(() => ({
      isFallback: true,
      push: jest.fn(),
    }));

    render(<ClientSideComponent project={mockProject} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it('renders "Project not found" when there is no project', () => {
    useRouter.mockImplementation(() => ({
      isFallback: false,
      push: jest.fn(),
    }));

    render(<ClientSideComponent />);
    expect(screen.getByText("Project not found")).toBeInTheDocument();
  });

  it("renders the project details when provided", () => {
    useRouter.mockImplementation(() => ({
      isFallback: false,
      push: jest.fn(),
    }));

    render(<ClientSideComponent project={mockProject} />);
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.skills)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText("Feature 1:")).toBeInTheDocument();
    expect(screen.getByText("Feature 2:")).toBeInTheDocument();
  });

  it("navigates back when the Go Back span is clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      isFallback: false,
      push: pushMock,
    }));

    render(<ClientSideComponent project={mockProject} />);
    fireEvent.click(screen.getByText("Go Back"));
    expect(pushMock).toHaveBeenCalledWith("/#projects");
  });
});
