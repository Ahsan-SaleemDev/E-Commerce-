"use client";

import { useState } from "react";

export default function Sidebar({ isOpen, onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="navbar-overlay"
        style={{
          transform: "translateX(0)",
          pointerEvents: "auto",
        }}
        onClick={onClose}
      ></div>
      <div
        className="nav-bar"
        style={{
          transform: "translateX(0)",
          pointerEvents: "auto",
        }}
      >
        <div className="top">
          <h2>Browse Cartzilla</h2>
          <i className="ri-close-large-line" onClick={onClose}></i>
        </div>
        <div className="bottom">
          <a href="">Home</a>
          <a href="">Shop</a>
          <div className="account">
            <a onClick={() => setDropdownOpen(!dropdownOpen)}>
              Account <i className={dropdownOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
            </a>
            <div className="dropdown" style={{ display: dropdownOpen ? "flex" : "none" }}>
              <a href="">Sign In</a>
              <a href="">Sign Up</a>
              <a href="">Password Recovery</a>
            </div>
          </div>
          <a href="">Pages</a>
          <a href="">Docs</a>
          <a href="">Components</a>
        </div>
      </div>
    </>
  );
}
