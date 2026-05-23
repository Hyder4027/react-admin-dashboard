import React from "react";

import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import UserProvider, {
  UserContext,
} from "../context/UserContext";

import { useContext } from "react";

import { vi } from "vitest";

// Mock API
vi.mock("../api/userApi", () => ({

  fetchUsers: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "John Doe",
        email: "john@test.com",
        role: "Admin",
      },
    ])
  ),

  createUser: vi.fn(),
  editUser: vi.fn(),
  removeUser: vi.fn(),

}));

// Test Component
const TestComponent = () => {

  const { users } =
    useContext(UserContext);

  return (
    <div>

      {users.map((user) => (

        <p key={user.id}>
          {user.name}
        </p>

      ))}

    </div>
  );
};

describe("UserContext", () => {

  test(
    "loads users from API",
    async () => {

      render(

        <UserProvider>

          <TestComponent />

        </UserProvider>
      );

      await waitFor(() => {

        expect(
          screen.getByText(
            "John Doe"
          )
        ).toBeInTheDocument();

      });

    }
  );

});