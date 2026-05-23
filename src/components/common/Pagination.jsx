import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const pages =
    [...Array(totalPages).keys()];

  return (
    <div className="flex gap-2 mt-6">

      {pages.map((page) => (

        <button
          key={page}
          onClick={() =>
            onPageChange(page + 1)
          }
          className={`
            px-4 py-2 rounded
            ${
              currentPage === page + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }
          `}
        >
          {page + 1}
        </button>

      ))}

    </div>
  );
};

export default Pagination;