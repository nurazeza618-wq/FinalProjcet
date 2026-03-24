import React from "react";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "rgba(76, 29, 207, 1)",
          padding: "10px",
          color: "white",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          boxSizing: "border-box"
        }}
      >
        <h1 style={{ margin: 0 }}>Login</h1>

        <Link to="/background" style={{ color: "white" }}>
        Klik untuk ke halaman selanjutnya
      </Link>
      </nav>


    </>
  );
};

export default NavbarLayout;