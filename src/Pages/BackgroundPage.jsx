import React from "react";
import background from "../assets/background.png";

const BackgroundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{ color: "white" }}></h1>
    </div>
  );
};

export default BackgroundPage;