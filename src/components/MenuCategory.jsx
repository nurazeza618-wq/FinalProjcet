import { Utensils, Coffee, CakeSlice, LayoutGrid } from "lucide-react";
import { useState } from "react";

const MenuCategory = () => {
  const [active, setActive] = useState("All");

  const categories = [
    { name: "All Menu", icon: LayoutGrid },
    { name: "Foods", icon: Utensils },
    { name: "Beverages", icon: Coffee },
    { name: "Dessert", icon: CakeSlice },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => {
        const Icon = cat.icon;

        return (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all
            ${
              active === cat.name
                ? "bg-blue-500 text-white border-blue-500 shadow"
                : "bg-white text-gray-500 border-gray-200 hover:border-blue-400"
            }`}
          >
            <Icon size={18} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategory;