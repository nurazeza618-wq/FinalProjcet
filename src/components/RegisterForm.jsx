import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

      <h1 style={{ marginBottom: "5px" }}>Create Account</h1>

      <p style={{ color: "#888", fontSize: "14px", marginBottom: "30px" }}>
        create your account here!
      </p>

      
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>Username</label>
        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
        />
      </div>

      {/* Password */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>Password</label>

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={{ ...inputStyle, paddingRight: "40px" }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#9ca3af"
            }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 
                0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94"/>
                <path d="M1 1l22 22"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 
                8 11 8a21.77 21.77 0 0 1-3.16 4.19"/>
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* Confirm Password */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>Confirm Password</label>

        <div style={{ position: "relative" }}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            style={{ ...inputStyle, paddingRight: "40px" }}
          />

          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#9ca3af"
            }}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 
                0-11-8-11-8a21.77 21.77 21.77 0 0 1 5.06-6.94"/>
                <path d="M1 1l22 22"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 
                8 11 8a21.77 21.77 0 0 1-3.16 4.19"/>
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* Button Login */}
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
        Login
      </button>

      {/* Already have account */}
      <p style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
        Already have an account?{" "}
        <Link to="/" style={{ color: "#3b6df6", textDecoration: "none" }}>
          Login
        </Link>
      </p>

    </div>
  );
};

export default RegisterForm;