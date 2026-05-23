import React from "react";

const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-6 w-96">

        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        <p className="mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>

        </div>

      </div>
    </div>
  );
};

export default Modal;