import React from "react";
import ConfirmResetPasswordForm from "../components/ConfirmResetPasswordForm";
import background from "../assets/background.png";

const ConfirmResetPasswordPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"
      }}
    >
      <ConfirmResetPasswordForm />
    </div>
  );
};

export default ConfirmResetPasswordPage;
