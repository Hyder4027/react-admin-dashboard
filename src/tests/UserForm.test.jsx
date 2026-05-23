import React from "react";

import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import UserForm from "../components/users/UserForm";

import {
  UserContext,
} from "../context/UserContext";

describe("UserForm Component", () => {

  // Test 1
  test(
    "shows validation errors on empty submit",
    async () => {

      render(

        <UserContext.Provider
          value={{
            addUser: vi.fn(),
            loading: false,
          }}
        >

          <UserForm />

        </UserContext.Provider>
      );

      const submitButton =
        screen.getByRole("button", {
          name: /add user/i,
        });

      await userEvent.click(
        submitButton
      );

      expect(
        screen.getByText(
          "Name is required"
        )
      ).toBeInTheDocument();

      expect(
        screen.getByText(
          "Email is required"
        )
      ).toBeInTheDocument();

    }
  );

  // Test 2
  test(
    "allows user to type",
    async () => {

      render(

        <UserContext.Provider
          value={{
            addUser: vi.fn(),
            loading: false,
          }}
        >

          <UserForm />

        </UserContext.Provider>
      );

      const nameInput =
        screen.getByPlaceholderText(
          "Enter name"
        );

      await userEvent.type(
        nameInput,
        "John Doe"
      );

      expect(nameInput)
        .toHaveValue("John Doe");

    }
  );

  // Test 3
  test(
    "disables button while loading",
    () => {

      render(

        <UserContext.Provider
          value={{
            addUser: vi.fn(),
            loading: true,
          }}
        >

          <UserForm />

        </UserContext.Provider>
      );

      const button =
        screen.getByRole("button", {
          name: /adding/i,
        });

      expect(button)
        .toBeDisabled();

    }
  );

});