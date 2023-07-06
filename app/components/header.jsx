import React from "react";

const headerStyles = {
  background: "linear-gradient(45deg, #B10000, #000000)",
  color: "white",
  height: "100px",
  width:"100%",
  borderBottom: "1px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius:"10px",
  fontSize: "2rem", // Added font size
  fontFamily: "Kablammo", // Added font family
};

export default function Header() {
  return (
    <header style={headerStyles}>
      <div>
        OPENSEASONS
      </div>
    </header>
  );
}
