import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const adminPassword = "admin123";

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (!password) {
      alert("Please enter password");
      return;
    }

    if (password !== adminPassword) {
      alert("Incorrect admin password");
      return;
    }

    alert("Admin access granted!");

    navigate("/ShowAdmin");
  };

  return (
    <div className="admin-page">
      <div className="admin-card">

        <h2>Admin Access</h2>

        <p>
          Enter your password to access the admin panel.
        </p>

        <form onSubmit={handleAdminLogin}>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Access Admin
          </button>

        </form>

      </div>
    </div>
  );
};

export default Admin;