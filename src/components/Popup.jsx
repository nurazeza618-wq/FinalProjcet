import React from "react";

const Popup = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">
      <div className="bg-white p-6 rounded-xl w-[350px] text-center shadow-lg">

        <div className="text-4xl mb-4">🗑️</div>

        <h2 className="text-lg font-semibold mb-6">
          Are you sure want to delete this file?
        </h2>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;