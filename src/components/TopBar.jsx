import { LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/foto-profil.png"; // ⚠️ sesuaikan dengan file kamu

const TopBar = () => {
  const navigate = useNavigate();

  // HANDLE LOGOUT
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Apakah Anda yakin ingin logout?"
    );

    if (confirmLogout) {
      // hapus data login jika ada
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // kembali ke halaman login
      navigate("/");
    }
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow-sm">

      {/* SEARCH */}
      <div className="relative w-[400px]">
        <input
          type="text"
          placeholder="Enter the keyword here..."
          className="w-full pl-10 pr-4 py-2 border rounded-full text-sm outline-none"
        />

        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* TEXT */}
        <p className="text-sm text-gray-500">
          Order Archive
        </p>

        {/* PROFILE */}
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="text-sm">
            <p className="font-semibold">
              John Doe
            </p>

            <p className="text-gray-400 text-xs">
              Admin
            </p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="text-red-500 cursor-pointer hover:bg-red-100 p-2 rounded-full transition"
        >
          <LogOut size={20} />
        </button>

      </div>
    </div>
  );
};

export default TopBar;