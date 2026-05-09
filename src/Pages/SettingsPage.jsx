import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const SettingsPage = () => {
  // FOTO PROFIL ADMIN (sesuaikan dengan file di assets)
  const [profileImage, setProfileImage] = useState(
    "/src/assets/profil.png"
  );

  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    username: "Admin Restaurant",
    role: "Administrator",
    status: "Active",
    language: "English",
    password: "********",
    fontSize: "16px",
    zoomDisplay: "100%",
  });

  // HANDLE INPUT FORM
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // GANTI FOTO
  const handleChangePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // HAPUS FOTO → kembali ke default
  const handleDeletePicture = () => {
    setProfileImage("/src/assets/profil.png");
  };

  // SAVE BUTTON
  const handleSave = () => {
    alert("Settings successfully saved!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <TopBar />

        <div className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-6">
            Settings
          </h1>

          <div className="bg-white rounded-2xl shadow p-6 max-w-5xl">

            {/* ========================= */}
            {/* ACCOUNT */}
            {/* ========================= */}
            <h2 className="text-lg font-semibold mb-6">
              Account
            </h2>

            {/* FOTO PROFIL */}
            <div className="flex items-center gap-6 mb-8">

              <div className="w-28 h-28 rounded-full overflow-hidden border bg-gray-100 shadow flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Admin Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3">

                {/* CHANGE PICTURE */}
                <label className="px-5 py-2 rounded-lg border border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-50 transition">
                  Change Picture

                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleChangePicture}
                  />
                </label>

                {/* DELETE PICTURE */}
                <button
                  onClick={handleDeletePicture}
                  className="px-5 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-50 transition"
                >
                  Delete Picture
                </button>

              </div>
            </div>

            {/* ========================= */}
            {/* FORM ACCOUNT */}
            {/* ========================= */}
            <div className="grid grid-cols-2 gap-5 mb-8">

              {/* EMAIL */}
              <div>
                <label className="text-sm">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              {/* USERNAME */}
              <div>
                <label className="text-sm">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="text-sm">
                  Role
                </label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              {/* STATUS */}
              <div>
                <label className="text-sm">
                  Status
                </label>

                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              {/* LANGUAGE */}
              <div>
                <label className="text-sm">
                  Language
                </label>

                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                >
                  <option>English</option>
                  <option>Indonesia</option>
                </select>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm">
                  Password
                </label>

                <div className="flex gap-3 mt-1">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    readOnly
                    className="w-full border rounded-xl p-3"
                  />

                  <button className="px-4 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 whitespace-nowrap">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {/* ========================= */}
            {/* APPEARANCE */}
            {/* ========================= */}
            <h2 className="text-lg font-semibold mb-5">
              Appearance
            </h2>

            <div className="grid grid-cols-2 gap-5">

              {/* FONT SIZE */}
              <div>
                <label className="text-sm">
                  Font Size
                </label>

                <input
                  type="text"
                  name="fontSize"
                  value={formData.fontSize}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              {/* ZOOM DISPLAY */}
              <div>
                <label className="text-sm">
                  Zoom Display
                </label>

                <input
                  type="text"
                  name="zoomDisplay"
                  value={formData.zoomDisplay}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

            </div>

            {/* ========================= */}
            {/* SAVE BUTTON */}
            {/* ========================= */}
            <div className="mt-8">
              <button
                onClick={handleSave}
                className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
