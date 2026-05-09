import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import MenuCard from "../components/MenuCard";
import MenuCategory from "../components/MenuCategory";
import Popup from "../components/Popup";

// DATA DUMMY
const initialMenu = Array(8)
  .fill({
    name: "Gado-gado Special",
    category: "Food",
    price: 20000,
    description: "Sayur + bumbu kacang",
    image: "/src/assets/gado-gado.png",
  })
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));

const ToastPage = () => {
  const [menuList, setMenuList] = useState(initialMenu);
  const [notification, setNotification] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // 🔥 KLIK MENU CARD → NOTIF TAMBAH
  const handleMenuClick = (menu) => {
    setNotification({
      message: "New menu successfully added!",
      menuName: menu.name,
    });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // 🔥 KLIK ICON DELETE → MUNCUL POPUP
  const handleDeleteClick = (menu) => {
    setSelectedMenu(menu);
    setShowPopup(true);
  };

  // 🔥 KONFIRM DELETE
  const handleDelete = () => {
    if (!selectedMenu) return;

    const updated = menuList.filter(
      (item) => item.id !== selectedMenu.id
    );

    setMenuList(updated);

    setNotification({
      message: "Menu successfully deleted!",
      menuName: selectedMenu.name,
    });

    setShowPopup(false);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <div className="flex flex-1">

          {/* LEFT */}
          <div className="flex-1 p-6">
            <MenuCategory />

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">List Menu</h2>
              <p className="text-sm text-gray-400">
                Total {menuList.length} Menu
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {menuList.map((item) => (
                <div
                  key={item.id}
                  className="relative cursor-pointer"
                  onClick={() => handleMenuClick(item)} // 🔥 klik card
                >

                  {/* 🔥 ICON DELETE */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // WAJIB
                      handleDeleteClick(item);
                    }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-100 z-10"
                  >
                    🗑️
                  </button>

                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL NOTIFICATION */}
          <div className="w-[320px] bg-white border-l p-5">
            <h2 className="font-semibold mb-4">Notification</h2>

            {!notification && (
              <p className="text-gray-400">
                No notification yet
              </p>
            )}

            {notification && (
              <div className="border border-green-500 p-3 rounded-lg flex gap-2 animate-pulse">

                <div className="text-green-600 font-bold">✔</div>

                <div>
                  <p className="font-semibold">
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.menuName}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 🔥 POPUP DELETE */}
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ToastPage;