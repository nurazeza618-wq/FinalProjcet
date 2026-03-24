const OrderList = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.priceValue, 0);

  return (
    <div className="w-[300px] bg-white p-4 shadow-sm flex flex-col">
      <h3 className="font-semibold mb-2">List Order</h3>

      <div className="flex-1 overflow-y-auto">
        {cart.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <img src={item.image} className="w-12 h-12 rounded" />
            <div>
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">
                Rp {item.priceValue}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-3">
        <p>Total</p>
        <h2 className="font-bold">Rp {total}</h2>
      </div>
    </div>
  );
};

export default OrderList;