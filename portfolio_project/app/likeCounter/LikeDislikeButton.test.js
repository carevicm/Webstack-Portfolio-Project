import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

describe("Like and Dislike Buttons", () => {
  test("Like button renders with correct initial color and text", () => {
    const { getByText } = render(
      <LikeButton active="none" onClick={() => {}} count={50} />
    );
    const likeButton = getByText(/Like/i);
    expect(likeButton).toHaveClass("bg-[#192861]");
    expect(likeButton).toHaveTextContent("Like 50");
  });

  test("Dislike button renders with correct initial color and text", () => {
    const { getByText } = render(
      <DislikeButton active="none" onClick={() => {}} count={25} />
    );
    const dislikeButton = getByText(/Dislike/i);
    expect(dislikeButton).toHaveClass("bg-[#192861]");
    expect(dislikeButton).toHaveTextContent("Dislike 25");
  });

  test("Like button turns green when active", () => {
    const { getByText } = render(
      <LikeButton active="like" onClick={() => {}} count={50} />
    );
    const likeButton = getByText(/Like/i);
    expect(likeButton).toHaveClass("bg-[#28a745]");
  });

  test("Dislike button turns red when active", () => {
    const { getByText } = render(
      <DislikeButton active="dislike" onClick={() => {}} count={25} />
    );
    const dislikeButton = getByText(/Dislike/i);
    expect(dislikeButton).toHaveClass("bg-[#ed4a4a]");
  });

  test("Clicking the Like button calls the onClick handler", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <LikeButton active="none" onClick={handleClick} count={50} />
    );
    const likeButton = getByText(/Like/i);
    fireEvent.click(likeButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Clicking the Dislike button calls the onClick handler", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <DislikeButton active="none" onClick={handleClick} count={25} />
    );
    const dislikeButton = getByText(/Dislike/i);
    fireEvent.click(dislikeButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
