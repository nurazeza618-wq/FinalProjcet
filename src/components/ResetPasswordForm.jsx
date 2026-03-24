import React from "react";
import logo from "../assets/logo.png";

const ResetPasswordForm = () => {

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    boxSizing: "border-box"
  };

  return (
    <div
      style={{
        width: "420px",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img src={logo} alt="logo" style={{ width: "80px", marginRight: "10px" }} />
      </div>

      <h1 style={{ marginBottom: "5px" }}>Reset Password</h1>

      <p style={{ color: "#888", fontSize: "14px", marginBottom: "30px" }}>
        Please enter your registered email!
      </p>

      {/* Email */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />
      </div>

      {/* Button Submit */}
      <button
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "#3b6df6",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>

    </div>
  );
};

export default ResetPasswordForm;