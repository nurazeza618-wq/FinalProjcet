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

const TambahFoto = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  // upload gambar dari komputer lokal
  const handleUploadImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // klik menu kiri → otomatis tampil kanan
  const handleSelectMenu = (item) => {
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price.replace("Rp ", ""),
      description: item.description,
    });

    setPreviewImage(item.image);
  };

  // input form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // tombol save → popup → pindah ke detail menu
  const handleSave = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.description
    ) {
      alert("Silakan lengkapi semua data terlebih dahulu");
      return;
    }

    // tampilkan popup sukses
    setShowPopup(true);

    // setelah 2 detik → pindah ke halaman detail menu
    setTimeout(() => {
      setShowPopup(false);
      navigate("/detail-menu");
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

            <div className="flex justify-between items-center mt-4 mb-4">
              <div></div>

              <p className="text-sm text-gray-400">
                Total {dummyMenu.length} Menu
              </p>
            </div>

            {/* GRID MENU */}
            <div className="grid grid-cols-4 gap-4">
              {dummyMenu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectMenu(item)}
                  className="bg-white rounded-lg p-2 shadow cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">
                Add Menu
              </h2>

              <button className="text-gray-500 text-xl">
                ×
              </button>
            </div>

            {/* UPLOAD FOTO */}
            <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center mb-4">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              ) : (
                <p className="text-sm text-gray-400 mb-3">
                  Drag and Drop your file here or
                </p>
              )}

              <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer text-sm">
                Choose File
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </label>
            </div>

            {/* NAME */}
            <div className="mb-3">
              <label className="text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name here..."
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            {/* CATEGORY */}
            <div className="mb-3">
              <label className="text-sm">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            {/* PRICE */}
            <div className="mb-3">
              <label className="text-sm">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price here..."
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <label className="text-sm">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add description here..."
                rows="4"
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            {/* BUTTON SAVE */}
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* POPUP SUCCESS */}
      {showPopup && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg w-[350px] p-4 flex items-start justify-between z-50">
          <div className="flex items-center gap-3">
            <CheckCircle
              className="text-green-500"
              size={22}
            />
            <p className="text-sm font-medium">
              New menu successfully added!
            </p>
          </div>

          <button onClick={() => setShowPopup(false)}>
            <X
              size={16}
              className="text-gray-400"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default TambahFoto;