import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import defaultProfile from "../assets/foto-profil.png"; // ✅ ambil dari assets

const TopBar = () => {
  const [profile, setProfile] = useState(defaultProfile); // ✅ default langsung dari assets

  // Ambil dari localStorage saat pertama load
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfile(savedImage);
    }
  }, []);

  // Handle upload gambar
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setProfile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full bg-white h-[70px] flex items-center justify-between px-6 shadow-sm">

      {/* LEFT */}
      <div className="flex items-center gap-4 w-full max-w-xl">

        {/* Logo */}
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
          P
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Enter the keyword here..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* RIGHT PROFILE */}
      <div className="flex items-center gap-4">

        <button className="text-gray-600 text-sm hover:text-blue-500">
          Order Archive
        </button>

        {/* FOTO PROFIL */}
        <label className="cursor-pointer relative">
          <img
            src={profile} // ✅ sudah langsung pakai state (default dari assets)
            className="w-10 h-10 rounded-full object-cover border"
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 hover:opacity-100 flex items-center justify-center text-white text-xs">
            Edit
          </div>
        </label>

      </div>
    </div>
  );
};

export default TopBar;