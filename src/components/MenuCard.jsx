const MenuCard = ({ item, addToCart }) => {
  return (
    <div
      onClick={() => addToCart(item)}
      className="w-full h-[232px] bg-white rounded-[10px] shadow-sm cursor-pointer hover:shadow-md transition-all"
    >
      <div className="relative h-[120px]">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          Food
        </span>
      </div>

      <div className="p-3">
        <h4 className="text-sm font-semibold">{item.name}</h4>
        <p className="text-xs text-gray-400">
          Vegetables, egg, tempe, tofu
        </p>
        <p className="text-blue-600 font-bold text-sm">
          {item.price} <span className="text-gray-400 text-xs">/portion</span>
        </p>
      </div>
    </div>
  );
};

export default MenuCard;