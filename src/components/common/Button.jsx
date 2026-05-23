import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {

  const baseClasses =
    "px-6 py-2 rounded-lg text-white transition duration-300";

  const variants = {

    primary:
      "bg-blue-600 hover:bg-blue-700",

    danger:
      "bg-red-500 hover:bg-red-600",

    secondary:
      "bg-gray-500 hover:bg-gray-600",

    warning:
      "bg-yellow-500 hover:bg-yellow-600",

  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : ""
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;