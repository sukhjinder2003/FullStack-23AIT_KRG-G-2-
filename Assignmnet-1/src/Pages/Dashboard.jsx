import React from "react";
import Navbar from "../Components/Navbar";

function Dashboard() {
  return (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navbar />
    <h2 style={{ marginTop: '24px' }}>Welcome to Dashboard</h2>
      <button style={{ display: 'block', margin: '24px auto', padding: '8px 24px' }} onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>Logout</button>
    </div>
  );
}

export default Dashboard;