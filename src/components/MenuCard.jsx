import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow p-3 relative">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-lg mb-2"
      />

      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500">Rp {item.price}</p>

    </div>
  );
};

export default MenuCard;