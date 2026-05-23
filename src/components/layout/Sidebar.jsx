import React from "react";

import {
  NavLink,
} from "react-router-dom";

import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  return (
    <>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          bg-gray-800 text-white w-64 min-h-screen p-5
          transform transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          md:translate-x-0
        `}
      >

        {/* Close Button */}
        <button
          className="md:hidden mb-6"
          onClick={() =>
            setSidebarOpen(false)
          }
        >
          <FaTimes size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-4">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded
                ${
                  isActive
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <FaHome />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded
                ${
                  isActive
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <FaUserPlus />
              Register User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded
                ${
                  isActive
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`
              }
            >
              <FaUsers />
              View Users
            </NavLink>
          </li>

        </ul>

      </aside>

    </>
  );
};

export default Sidebar;