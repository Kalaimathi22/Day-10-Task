import React from "react";

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: "#4a90e2", 
      padding: "10px", 
      display: "flex", 
      justifyContent: "space-around",
      color: "white"
    }}>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
    </nav>
  );
}

export default Navbar;
