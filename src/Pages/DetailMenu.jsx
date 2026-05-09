import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import MenuCategory from "../components/MenuCategory";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyMenu = Array(12).fill({
  name: "Gado-gado Special",
  price: "Rp 20.000",
  image: "/src/assets/gado-gado.png",
  category: "Food",
  description:
    "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk",
});

const DetailMenu = () => {
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState({
    name: "Gado-gado Special",
    category: "Food",
    price: "20.000",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk",
    image: "/src/assets/gado-gado.png",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // pilih menu
  const handleSelectMenu = (item) => {
    setMenuData({
      name: item.name,
      category: item.category,
      price: item.price.replace("Rp ", ""),
      description: item.description,
      image: item.image,
    });

    setIsDeleted(false); // reset kalau pilih menu lagi
  };

  // edit toggle
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  // input change
  const handleChange = (e) => {
    setMenuData({
      ...menuData,
      [e.target.name]: e.target.value,
    });
  };

  // open delete modal
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  // confirm delete
  const confirmDelete = () => {
    setMenuData({
      name: "",
      category: "",
      price: "",
      description: "",
      image: "",
    });

    setShowDeleteModal(false);
    setShowToast(true);
    setIsDeleted(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
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

          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
          <div className="w-[360px] bg-white border-l p-5 flex flex-col overflow-y-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">
                Detail Menu
              </h2>

              <div className="flex gap-2">

                {/* DELETE */}
                <button
                  onClick={handleDelete}
                  className="border border-red-300 text-red-500 p-2 rounded-lg hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>

                {/* EDIT */}
                <button
                  onClick={handleEdit}
                  className="border border-yellow-300 text-yellow-500 p-2 rounded-lg hover:bg-yellow-50"
                >
                  <Pencil size={18} />
                </button>
              </div>
            </div>

            {/* IF DELETED */}
            {isDeleted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">

                <div className="text-gray-400 text-lg font-medium">
                  Add Menu Here
                </div>

                <p className="text-sm text-gray-400 mt-2">
                  No menu selected
                </p>

              </div>
            ) : (
              <>
                {/* IMAGE */}
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
                  readOnly={!isEdit}
                  className="w-full border p-3 rounded mb-3"
                />

                {/* CATEGORY */}
                <input
                  name="category"
                  value={menuData.category}
                  onChange={handleChange}
                  readOnly={!isEdit}
                  className="w-full border p-3 rounded mb-3"
                />

                {/* PRICE */}
                <input
                  name="price"
                  value={menuData.price}
                  onChange={handleChange}
                  readOnly={!isEdit}
                  className="w-full border p-3 rounded mb-3"
                />

                {/* DESCRIPTION */}
                <textarea
                  rows="4"
                  name="description"
                  value={menuData.description}
                  onChange={handleChange}
                  readOnly={!isEdit}
                  className="w-full border p-3 rounded mb-4"
                />

                {/* SAVE */}
                <button
                  onClick={() =>
                    navigate("/edit-menu", { state: menuData })
                  }
                  className="w-full bg-blue-500 text-white py-3 rounded-lg"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white w-[320px] rounded-xl p-6 text-center">

            <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-3">
              <Trash2 className="text-red-500" size={26} />
            </div>

            <h2 className="font-semibold text-lg mb-2">
              Are you sure want to delete file?
            </h2>

            <p className="text-sm text-gray-500 mb-5">
              This action cannot be undone
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-full border py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="w-full bg-red-500 text-white py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      )}

      {/* TOAST SUCCESS */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg px-4 py-3 z-50">

          <p className="text-green-600 font-medium">
            Menu successfully deleted
          </p>

        </div>
      )}
    </div>
  );
};

export default DetailMenu;