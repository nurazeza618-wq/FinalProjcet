import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import MenuCategory from "../components/MenuCategory";
import { CheckCircle, X } from "lucide-react";

const dummyMenu = Array(12).fill({
  name: "Gado-gado Special",
  price: "Rp 20.000",
  image: "/src/assets/gado-gado.png",
  category: "Food",
  description:
    "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk",
});

const EditMenu = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const [menuData, setMenuData] = useState({
    name: "Gado-gado Special",
    category: "Food",
    price: "20.000",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk",
    image: "/src/assets/gado-gado.png",
  });

  // klik menu kiri
  const handleSelectMenu = (item) => {
    setMenuData({
      name: item.name,
      category: item.category,
      price: item.price.replace("Rp ", ""),
      description: item.description,
      image: item.image,
    });
  };

  // input edit
  const handleChange = (e) => {
    setMenuData({
      ...menuData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE
  const handleSave = () => {
    if (
      !menuData.name ||
      !menuData.price ||
      !menuData.description
    ) {
      alert("Lengkapi data dulu!");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/detail-menu", { state: menuData });
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <TopBar />

        <div className="flex flex-1 overflow-hidden">

          {/* LEFT SIDE - LIST MENU */}
          <div className="flex-1 p-6 overflow-y-auto">

            <h2 className="text-xl font-semibold mb-4">
              List Menu
            </h2>

            <MenuCategory />

            <div className="grid grid-cols-4 gap-4 mt-4">
              {dummyMenu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectMenu(item)}
                  className="bg-white rounded-lg p-2 shadow cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    className="w-full h-28 object-cover rounded-lg"
                  />

                  <h3 className="font-semibold text-sm mt-2">
                    {item.name}
                  </h3>

                  <p className="text-blue-500 text-sm font-medium">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - EDIT FORM + IMAGE */}
          <div className="w-[360px] bg-white border-l p-5 flex flex-col overflow-y-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">
                Edit Menu
              </h2>

              <button
                onClick={() => navigate("/detail-menu")}
                className="text-gray-500 text-xl"
              >
                ×
              </button>
            </div>

            {/* IMAGE (SAMA SEPERTI DETAIL MENU) */}
            {menuData.image && (
              <img
                src={menuData.image}
                className="w-full h-44 object-cover rounded-xl mb-5"
              />
            )}

            {/* NAME */}
            <input
              name="name"
              value={menuData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-3"
              placeholder="Food name"
            />

            {/* CATEGORY */}
            <input
              name="category"
              value={menuData.category}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-3"
              placeholder="Category"
            />

            {/* PRICE */}
            <input
              name="price"
              value={menuData.price}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-3"
              placeholder="Price"
            />

            {/* DESCRIPTION */}
            <textarea
              rows="4"
              name="description"
              value={menuData.description}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              placeholder="Description"
            />

            {/* SAVE BUTTON */}
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* POPUP SUCCESS */}
      {showPopup && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 flex items-center gap-3">

          <CheckCircle className="text-green-500" size={20} />

          <span className="text-green-600 font-medium">
            Menu successfully updated
          </span>

          <button onClick={() => setShowPopup(false)}>
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditMenu;