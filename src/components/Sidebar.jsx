import {
  LayoutGrid,
  ClipboardList,
  ShoppingCart,
  Settings,
  ArrowRight
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-[80px] bg-white h-screen shadow flex flex-col justify-between items-center py-4">

      {/* ===== TOP ===== */}
      <div className="flex flex-col items-center gap-4">

        {/* LOGO */}
        <div className="w-12 h-12 bg-[#3b6df6] text-white rounded-full flex items-center justify-center font-bold text-lg shadow">
          P
        </div>

        {/* BACK BUTTON */}
        <div
          onClick={() => navigate(-1)}
          className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100 hover:scale-105 transition"
        >
          <ArrowRight size={18} />
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-5 mt-4 relative">

          {/* ACTIVE INDICATOR */}
          <div
            className={`absolute left-0 w-1 h-10 bg-blue-500 rounded-r-full transition-all duration-300 ${
              isActive("/cashier")
                ? "top-0"
                : isActive("/sales-report")
                ? "top-[68px]"
                : isActive("/cart")
                ? "top-[136px]"
                : isActive("/settings")
                ? "top-[204px]"
                : "hidden"
            }`}
          />

          {/* CASHIER */}
          <div
            onClick={() => navigate("/cashier")}
            className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 ${
              isActive("/cashier")
                ? "bg-blue-50 text-blue-500 scale-105"
                : "text-gray-400 hover:bg-gray-100 hover:text-blue-500 hover:scale-105"
            }`}
          >
            <LayoutGrid size={22} />
          </div>

          {/* ORDER → SALES REPORT */}
          <div
            onClick={() => navigate("/sales-report")}
            className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 ${
              isActive("/sales-report")
                ? "bg-blue-50 text-blue-500 scale-105"
                : "text-gray-400 hover:bg-gray-100 hover:text-blue-500 hover:scale-105"
            }`}
          >
            <ClipboardList size={22} />
          </div>

          {/* CART */}
          <div
            onClick={() => navigate("/cart")}
            className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 ${
              isActive("/cart")
                ? "bg-blue-50 text-blue-500 scale-105"
                : "text-gray-400 hover:bg-gray-100 hover:text-blue-500 hover:scale-105"
            }`}
          >
            <ShoppingCart size={22} />
          </div>

          {/* SETTINGS */}
          <div
            onClick={() => navigate("/settings")}
            className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 ${
              isActive("/settings")
                ? "bg-blue-50 text-blue-500 scale-105"
                : "text-gray-400 hover:bg-gray-100 hover:text-blue-500 hover:scale-105"
            }`}
          >
            <Settings size={22} />
          </div>

        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="text-xs text-gray-300">
        v1.0
      </div>

    </div>
  );
};

export default Sidebar;