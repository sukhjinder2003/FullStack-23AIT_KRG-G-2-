import React from "react";

function Login() {

  const handleLogin = () => {
    localStorage.setItem("token", "user123");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;