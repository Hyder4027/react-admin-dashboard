import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  fetchUsers,
  createUser,
  editUser,
  removeUser,
} from "../api/userApi";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  // Users State
  const [users, setUsers] = useState([]);

  // Loading State
  const [loading, setLoading] =
    useState(false);

  // Error State
  const [error, setError] =
    useState("");

  // Search State
  const [searchTerm, setSearchTerm] =
    useState("");

    const hasFetched = useRef(false);

  // Load Users from API
  const loadUsers = async () => {

    try {

      setLoading(true);

      const data = await fetchUsers();

      setUsers(data);

      setError("");

    } catch (err) {

      setError(
        "Failed to fetch users"
      );

    } finally {

      setLoading(false);

    }
  };

  // Add User
  const addUser = async (userData) => {

    try {

      setLoading(true);

      const newUser =
        await createUser(userData);

      setUsers((prevUsers) => [
        ...prevUsers,
        newUser,
      ]);

    } catch (err) {

      setError(
        "Failed to add user"
      );

    } finally {

      setLoading(false);

    }
  };

  // Update User
  const updateUser = async (
    updatedUser
  ) => {

    try {

      setLoading(true);

      const updated =
        await editUser(
          updatedUser.id,
          updatedUser
        );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updated.id
            ? updated
            : user
        )
      );

    } catch (err) {

      setError(
        "Failed to update user"
      );

    } finally {

      setLoading(false);

    }
  };

  // Delete User
  const deleteUser = async (id) => {

    try {

      setLoading(true);

      await removeUser(id);

      setUsers((prevUsers) =>
        prevUsers.filter(
          (user) => user.id !== id
        )
      );

    } catch (err) {

      setError(
        "Failed to delete user"
      );

    } finally {

      setLoading(false);

    }
  };

  // Load data on mount
  useEffect(() => {

  if (!hasFetched.current) {

    loadUsers();

    hasFetched.current = true;
  }

}, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        updateUser,
        deleteUser,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;