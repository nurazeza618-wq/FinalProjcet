import TopBar from "../components/TopBar";
import MenuCategory from "../components/MenuCategory";
import MenuCard from "../components/MenuCard";
import Sidebar from "../components/Sidebar";

const dummyMenu = Array(12).fill({
  name: "Gado-gado Special",
  price: "Rp 20.000",
  image: "/src/assets/gado-gado.png",
});

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <TopBar />

        <div className="flex flex-1 overflow-hidden">

          {/* LEFT MENU */}
          <div className="flex-1 p-6 overflow-y-auto">

            <MenuCategory />

            {/* HEADER LIST MENU */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">List Menu</h2>
              <p className="text-sm text-gray-400">
                Total {dummyMenu.length} Menu
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-4 gap-3">
              {dummyMenu.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* RIGHT ORDER PANEL */}
          <div className="w-[320px] bg-white border-l p-4 flex flex-col">

            {/* TITLE */}
            <h2 className="font-semibold text-lg mb-3">List Order</h2>

            {/* BOX */}
            <div className="bg-gray-50 border rounded-xl p-4 space-y-4">

              <p className="text-xs text-gray-400">
                No Order #1234567890
              </p>

              {/* BUTTON */}
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm">
                  Dine In
                </button>
                <button className="flex-1 bg-gray-200 text-gray-500 py-2 rounded-lg text-sm">
                  Take Away
                </button>
              </div>

              {/* CUSTOMER */}
              <div>
                <label className="text-xs text-gray-500">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Anisa"
                  className="w-full mt-1 p-2 border rounded-lg text-sm"
                />
              </div>

              {/* TABLE */}
              <div>
                <label className="text-xs text-gray-500">
                  No.Table
                </label>
                <input
                  type="text"
                  placeholder="02"
                  className="w-full mt-1 p-2 border rounded-lg text-sm"
                />
              </div>

            </div>

            {/* ORDER ITEM */}
            <div className="mt-4 flex-1 overflow-y-auto">

              <div className="flex gap-3 items-center border-b pb-3">
                <img
                  src="/src/assets/gado-gado.png"
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-semibold">
                    Gado-gado Spesial
                  </h4>
                  <p className="text-xs text-gray-400">
                    Rp 20.000
                  </p>
                </div>

                <button className="text-gray-400 text-sm">✏️</button>
              </div>

            </div>

            {/* TOTAL */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Sub Total</span>
                <span>Rp 20.000</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax</span>
                <span>Rp 0</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>Rp 20.000</span>
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-2">
                Continue Payment
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;