import React from "react";

import { render, screen } from "@testing-library/react";

import Input from "../components/common/Input";

describe("Input Component", () => {
  test("renders input field correctly", () => {
    render(
      <Input
        label="Name"
        name="name"
        value=""
        onChange={() => {}}
        placeholder="Enter name"
      />,
    );

    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  test("renders error message", () => {
    render(
      <Input
        label="Email"
        name="email"
        value=""
        onChange={() => {}}
        error="Email is required"
      />,
    );

    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });
});
