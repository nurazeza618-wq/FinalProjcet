import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ConfirmResetPasswordPage from "./Pages/ConfirmResetPasswordPage";
import DashboardPage from "./Pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/confirm-reset-password" element={<ConfirmResetPasswordPage />} />

        {/* 🔥 INI DASHBOARD */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;