import LoginForm from "../components/LoginForm";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  /*
    =========================
    LOGIN ROLE
    =========================

    ADMIN
    Email    : nurazeza618@gmail.com
    Password : 123

    CASHIER
    Email    : cashier@gmail.com
    Password : 123
  */

  // HANDLE LOGIN
  const handleLogin = (email, password) => {
    // =========================
    // LOGIN ADMIN
    // =========================
    if (
      email === "nurazeza618@gmail.com" &&
      password === "123"
    ) {
      localStorage.setItem("role", "admin");

      // ADMIN → masuk halaman admin
      navigate("/tambah-menu");
    }

    // =========================
    // LOGIN CASHIER
    // =========================
    else if (
      email === "cashier@gmail.com" &&
      password === "123"
    ) {
      localStorage.setItem("role", "cashier");

      // CASHIER → langsung masuk halaman cashier
      navigate("/cashier");
    }

    // =========================
    // LOGIN GAGAL
    // =========================
    else {
      alert("Email atau Password salah!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "120px",
      }}
    >
      {/* kirim function login ke LoginForm */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;