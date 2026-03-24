import {
  Home,
  ClipboardList,
  ShoppingCart,
  Settings,
  Power
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[80px] bg-white h-screen shadow flex flex-col justify-between items-center py-4">

      {/* ===== TOP ===== */}
      <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
          P
        </div>

        {/* MENU ICON */}
        <div className="flex flex-col gap-5 mt-6">

          <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center">
            <Home size={20} />
          </div>

          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
            <ClipboardList size={20} />
          </div>

          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
            <ShoppingCart size={20} />
          </div>

          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
            <Settings size={20} />
          </div>

        </div>
      </div>

      {/* ===== BOTTOM (LOGOUT ICON) ===== */}
      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 cursor-pointer hover:bg-red-100 hover:text-red-500 transition">
        <Power size={20} />
      </div>

    </div>
  );
};

export default Sidebar;