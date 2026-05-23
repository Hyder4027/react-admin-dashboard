import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext =
  createContext();

const ThemeProvider = ({
  children,
}) => {

  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem("theme");

      return savedTheme === "dark";
    });

  // Save theme
  useEffect(() => {

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

    if (darkMode) {

      document.documentElement.classList.add(
        "dark"
      );

    } else {

      document.documentElement.classList.remove(
        "dark"
      );
    }

  }, [darkMode]);

  // Toggle Theme
  const toggleTheme = () => {

    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;