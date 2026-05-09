import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import MenuCategory from "../components/MenuCategory";
import MenuCard from "../components/MenuCard";

const dummyMenu = Array(12).fill({
  name: "Gado-gado Special",
  price: "Rp 20.000",
  image: "/src/assets/gado-gado.png",
});

const TambahMenu = () => {
  const navigate = useNavigate();

  // fungsi saat tombol Add Menu diklik
  const handleAddMenu = () => {
    navigate("/tambah-foto");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <TopBar />

        <div className="flex flex-1 overflow-hidden">

          {/* LEFT SECTION */}
          <div className="flex-1 p-6 overflow-y-auto">

            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-4">
              List Menu
            </h2>

            {/* CATEGORY */}
            <MenuCategory />

            {/* HEADER INFO */}
            <div className="flex justify-between items-center mt-4 mb-4">
              <div></div>

              <p className="text-sm text-gray-400">
                Total {dummyMenu.length} Menu
              </p>
            </div>

            {/* MENU GRID */}
            <div className="grid grid-cols-4 gap-4">
              {dummyMenu.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-[340px] bg-white border-l p-4 flex flex-col">

            {/* HEADER ADD MENU */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">
                Add Menu
              </h2>

              {/* BUTTON PLUS */}
              <button
                onClick={handleAddMenu}
                className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600 transition"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* LINE */}
            <div className="border-b mb-4"></div>

            {/* EMPTY STATE */}
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              Add Menu here
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMenu;