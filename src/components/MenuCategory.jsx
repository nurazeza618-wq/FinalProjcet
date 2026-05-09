import React, { useState } from "react";
import { LayoutGrid, Utensils, Coffee, IceCream } from "lucide-react";
import { FaBirthdayCake, FaCoffee, FaUtensils } from "react-icons/fa";

const MenuCategory = () => {
  const [active, setActive] = useState("All Menu");

  const categories = [
    { name: "All Menu", icon: LayoutGrid }, // 🔥 FIX ICON
    { name: "Foods", icon: FaUtensils },
    { name: "Beverages", icon: FaCoffee },
    { name: "Dessert", icon: FaBirthdayCake},
  ];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => {
        const Icon = cat.icon;

        return (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center justify-center gap-3 w-44 h-14 rounded-xl border transition-all text-base font-medium
            ${
              active === cat.name
                ? "bg-blue-500 text-white border-blue-500 shadow-md"
                : "bg-white text-gray-500 border-gray-200 hover:border-blue-400"
            }`}
          >
            <Icon size={20} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategory;