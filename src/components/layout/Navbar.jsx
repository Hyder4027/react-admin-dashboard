import React from "react";

import { FaBars } from "react-icons/fa";

import { FaMoon, FaSun } from "react-icons/fa";

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

const Navbar = ({ setSidebarOpen }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <FaBars size={22} />
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold">React Admin Dashboard</h1>

        <button onClick={toggleTheme} className="mr-4">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* User */}
        <p className="text-sm">Welcome Admin</p>
      </div>
    </nav>
  );
};

export default Navbar;
