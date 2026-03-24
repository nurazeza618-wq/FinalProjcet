import React from "react";

const CategoryTabs = () => {
  return (
    <div className="flex gap-3 mb-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        All Menu
      </button>
      <button className="bg-gray-100 px-4 py-2 rounded-lg">Foods</button>
      <button className="bg-gray-100 px-4 py-2 rounded-lg">Beverages</button>
      <button className="bg-gray-100 px-4 py-2 rounded-lg">Dessert</button>
    </div>
  );
};

export default CategoryTabs;