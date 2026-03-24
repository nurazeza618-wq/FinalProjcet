import React from "react";
import RegisterForm from "../components/RegisterForm";
import background from "../assets/background.png";

const RegisterPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "top center", // supaya kepala tidak terpotong
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "150px",
        alignItems: "center"
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;