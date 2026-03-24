import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        placeholder="Enter the keyword here..."
        className="border p-2 rounded w-[300px]"
      />

      <div className="flex items-center gap-3">
        <span className="text-sm">Order Archive</span>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Header;