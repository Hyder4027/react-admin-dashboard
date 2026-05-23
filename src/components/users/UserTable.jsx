import React, {
  useMemo,
  useCallback,
  useState,
  useDeferredValue,
  useTransition,
} from "react";

import { Link } from "react-router-dom";

import Loader from "../common/Loader";

import Pagination from "../common/Pagination";

import SearchBar from "./SearchBar";

import useUsers from "../../hooks/useUsers";

import useDebounce from "../../hooks/useDebounce";

const UserTable = () => {

  // Context Values
  const {
    users,
    deleteUser,
    searchTerm,
    setSearchTerm,
    loading,
    error,
  } = useUsers();

  // Pagination State
  const [currentPage, setCurrentPage] =
    useState(1);

  const usersPerPage = 5;

  // Transition State
  const [
    isPending,
    startTransition,
  ] = useTransition();

  // Debounced Search
  const debouncedSearch =
    useDebounce(searchTerm, 500);

  // Deferred Search
  const deferredSearch =
    useDeferredValue(debouncedSearch);

  // Search Handler
  const handleSearch = useCallback(
    (e) => {

      startTransition(() => {

        setSearchTerm(e.target.value);

      });

      // Reset pagination
      setCurrentPage(1);

    },
    [setSearchTerm]
  );

  // Filter Users
  const filteredUsers = useMemo(() => {

    return users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(
          deferredSearch.toLowerCase()
        )
    );

  }, [users, deferredSearch]);

  // Loading State
  if (loading) {
    return <Loader />;
  }

  // Error State
  if (error) {
    return (
      <p className="text-red-500">
        {error}
      </p>
    );
  }

  // Pagination Logic
  const lastIndex =
    currentPage * usersPerPage;

  const firstIndex =
    lastIndex - usersPerPage;

  const currentUsers =
    filteredUsers.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    filteredUsers.length /
    usersPerPage
  );

  return (
    <div className="
      bg-white
      dark:bg-gray-800
      dark:text-white
      shadow-md
      rounded-xl
      p-6
      overflow-x-auto
    ">

      {/* Header */}
      <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        md:items-center
        mb-6
        gap-4
      ">

        <h2 className="text-2xl font-bold">
          Users List
        </h2>

        {/* Search */}
        <div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearch}
          />

          {/* Pending State */}
          {isPending && (
            <p className="
              text-sm
              text-gray-500
              mt-2
            ">
              Searching...
            </p>
          )}

        </div>

      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 ? (

        <p className="text-gray-500">
          No users found
        </p>

      ) : (

        <>
          {/* Table */}
          <table className="w-full border-collapse">

            <thead>

              <tr className="
                bg-gray-200
                dark:bg-gray-700
              ">

                <th className="p-3 text-left">
                  Name
                </th>

                <th className="p-3 text-left">
                  Email
                </th>

                <th className="p-3 text-left">
                  Role
                </th>

                <th className="p-3 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {currentUsers.map((user) => (

                <tr
                  key={user.id}
                  className="
                    border-b
                    hover:bg-gray-50
                    dark:hover:bg-gray-700
                  "
                >

                  {/* Name */}
                  <td className="p-3">
                    {user.name}
                  </td>

                  {/* Email */}
                  <td className="p-3">
                    {user.email}
                  </td>

                  {/* Role */}
                  <td className="p-3">
                    {user.role}
                  </td>

                  {/* Actions */}
                  <td className="
                    p-3
                    flex
                    gap-3
                  ">

                    {/* Edit */}
                    <Link
                      to={`/edit/${user.id}`}
                      className="
                        bg-yellow-500
                        text-white
                        px-4
                        py-1
                        rounded
                        hover:bg-yellow-600
                        transition
                      "
                    >
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() =>
                        deleteUser(user.id)
                      }
                      className="
                        bg-red-500
                        text-white
                        px-4
                        py-1
                        rounded
                        hover:bg-red-600
                        transition
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

        </>

      )}

    </div>
  );
};

export default UserTable;