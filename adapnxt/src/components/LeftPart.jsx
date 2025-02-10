import React, { useState } from "react";
import "./LeftPart.css";

function LeftPart() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="leftpart">
      <h1 className="dashboard-title">🏡Dashboard</h1>

      <div className="menu-item" onClick={() => toggleDropdown("productManagement")}>
        <span>📦 Product Management</span>
        <span className="arrow">{openDropdown === "productManagement" ? "▲" : "▼"}</span>
      </div>
      {openDropdown === "productManagement" && (
        <div className="submenu">
          <div className="submenu-item">📌 Products</div>
          <div className="submenu-item">➕ Create Product</div>
          <div className="submenu-item">📂 Categories</div>
        </div>
      )}

      <div className="menu-item" onClick={() => toggleDropdown("merchantManagement")}>
        <span>📋 Merchant Management</span>
        <span className="arrow">{openDropdown === "merchantManagement" ? "▲" : "▼"}</span>
      </div>
      {openDropdown === "merchantManagement" && (
        <div className="submenu">
          <div className="submenu-item">📜 View Merchants</div>
          <div className="submenu-item">➕ Add Merchant</div>
        </div>
      )}

      <div className="menu-item" onClick={() => toggleDropdown("leadManagement")}>
        <span>👥 Lead Management</span>
        <span className="arrow">{openDropdown === "leadManagement" ? "▲" : "▼"}</span>
      </div>
      {openDropdown === "leadManagement" && (
        <div className="submenu">
          <div className="submenu-item">📊 View Leads</div>
          <div className="submenu-item">➕ Add Lead</div>
        </div>
      )}

      <div className="menu-item" onClick={() => toggleDropdown("userManagement")}>
        <span>👤 User Management</span>
        <span className="arrow">{openDropdown === "userManagement" ? "▲" : "▼"}</span>
      </div>
      {openDropdown === "userManagement" && (
        <div className="submenu">
          <div className="submenu-item">👀 View Users</div>
          <div className="submenu-item">➕ Add User</div>
        </div>
      )}

      <div className="menu-item">📢 Banners</div>

      <div className="menu-item" onClick={() => toggleDropdown("trainingManagement")}>
        <span>🎥 Training Management</span>
        <span className="arrow">{openDropdown === "trainingManagement" ? "▲" : "▼"}</span>
      </div>
      {openDropdown === "trainingManagement" && (
        <div className="submenu">
          <div className="submenu-item">📖 View Trainings</div>
          <div className="submenu-item">➕ Add Training</div>
        </div>
      )}

      <div className="menu-item">📂 Code Upload Management</div>
    </div>
  );
}

export default LeftPart;
