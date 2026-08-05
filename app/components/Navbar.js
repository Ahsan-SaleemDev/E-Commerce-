"use client";

import { useState, useEffect } from "react";

export default function Navbar({ onMenuOpen, onCartOpen, cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`part-1 ${scrolled ? "fixed" : ""}`}>
      <h1>
        <i className="ri-menu-line" onClick={onMenuOpen}></i>
        Cartzilla
      </h1>
      <div className="search-box">
        <input type="text" placeholder="Search for products" />
        <i className="ri-search-line"></i>
      </div>
      <div className="icons">
        <i className="ri-sun-line"></i>
        <i className="ri-user-line"></i>
        <i className="ri-heart-3-line"></i>
        <i
          className="ri-shopping-cart-line"
          data-count={cartCount}
          onClick={onCartOpen}
        ></i>
      </div>
    </div>
  );
}
