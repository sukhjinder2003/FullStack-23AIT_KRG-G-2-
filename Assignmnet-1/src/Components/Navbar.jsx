import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <Link to="/dashboard" style={{ margin: "0 16px" }}>Dashboard</Link>
      <Link to="/dashboard/water" style={{ margin: "0 16px" }}>Water Tracker</Link>
    </div>
    
  );
}

export default Navbar;