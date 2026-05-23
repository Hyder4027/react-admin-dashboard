import React from "react";

const SearchBar = ({
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">

      <input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={onChange}
        className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2 outline-none"
      />

    </div>
  );
};

export default React.memo(SearchBar);