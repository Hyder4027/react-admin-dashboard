import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">

      {message}

    </div>
  );
};

export default ErrorMessage;