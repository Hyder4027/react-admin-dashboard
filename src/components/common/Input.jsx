import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-4">

      {/* Label */}
      <label className="block mb-1 font-medium">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-2 outline-none
          ${
            error
              ? "border-red-500"
              : "border-gray-300"
          }`}
      />

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;