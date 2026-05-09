import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ConfirmResetPasswordPage from "./Pages/ConfirmResetPasswordPage";

import DashboardPage from "./Pages/DashboardPage";
import CashierPage from "./Pages/CashierPage";

import TambahMenu from "./Pages/TambahMenu";
import TambahFoto from "./Pages/TambahFoto";
import DetailMenu from "./Pages/DetailMenu";
import EditMenu from "./Pages/EditMenu";

import ToastPage from "./Pages/ToastPage";
import SalesReportPage from "./Pages/SalesReportPage";
import SettingsPage from "./Pages/SettingsPage"; // ← halaman settings baru

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========================= */}
        {/* HALAMAN AWAL = LOGIN */}
        {/* ========================= */}
        <Route path="/" element={<LoginPage />} />

        {/* ========================= */}
        {/* AUTH */}
        {/* ========================= */}
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />

        <Route
          path="/confirm-reset-password"
          element={<ConfirmResetPasswordPage />}
        />

        {/* ========================= */}
        {/* DASHBOARD */}
        {/* ========================= */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        {/* ========================= */}
        {/* CASHIER */}
        {/* ========================= */}
        <Route
          path="/cashier"
          element={<CashierPage />}
        />

        {/* ========================= */}
        {/* MENU */}
        {/* ========================= */}
        <Route
          path="/tambah-menu"
          element={<TambahMenu />}
        />

        <Route
          path="/tambah-foto"
          element={<TambahFoto />}
        />

        <Route
          path="/detail-menu"
          element={<DetailMenu />}
        />

        <Route
          path="/edit-menu"
          element={<EditMenu />}
        />

        {/* ========================= */}
        {/* SALES REPORT */}
        {/* ========================= */}
        <Route
          path="/sales-report"
          element={<SalesReportPage />}
        />

        {/* ========================= */}
        {/* SETTINGS */}
        {/* ========================= */}
        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        {/* ========================= */}
        {/* TOAST PAGE */}
        {/* ========================= */}
        <Route
          path="/toast"
          element={<ToastPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;