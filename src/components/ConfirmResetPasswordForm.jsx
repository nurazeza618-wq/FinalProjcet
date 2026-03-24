import React, { useState } from "react";

const ConfirmResetPasswordForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  return (
    <div
      style={{
        width: "520px",
        position: "absolute",
        top: "190px",
        left: "120px",
        background: "#f5f5f5",
        borderRadius: "20px",
        border: "4px solid #e5e7eb",
        padding: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        fontFamily: "Arial"
      }}
    >

      {/* Logo PadiPos */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "25px"
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          P
        </div>

        <h2 style={{ color: "#3b82f6", margin: 0 }}>PadiPos</h2>
      </div>

      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "28px" }}>
        Reset Password
      </h1>

      <p style={{ textAlign: "center", color: "gray", marginBottom: "35px" }}>
        Please enter your new password and confirm
      </p>

      {/* New Password */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>New Password</label>

        <div style={{ position: "relative", marginTop: "8px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
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

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>

            ) : (

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94"/>
                <path d="M1 1l22 22"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.16 4.19"/>
              </svg>

            )}
          </span>
        </div>
      </div>

      {/* Confirm Password */}
      <div style={{ marginBottom: "30px" }}>
        <label style={{ fontSize: "14px", color: "#444" }}>Confirm Password</label>

        <div style={{ position: "relative", marginTop: "8px" }}>
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

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>

            ) : (

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94"/>
                <path d="M1 1l22 22"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.16 4.19"/>
              </svg>

            )}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(90deg,#3b82f6,#2563eb)",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Reset Password
      </button>

    </div>
  );
};

export default ConfirmResetPasswordForm;