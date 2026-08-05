"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-top">
          <div className="container">
            <span>Free shipping on orders over $50 🚚</span>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="#">Track Order</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <button
              className="mobile-nav-btn"
              onClick={() => setMobileOpen(true)}
            >
              <i className="ri-menu-line"></i>
            </button>

            <Link href="/" className="logo">
              Fresh<span>Mart</span>
            </Link>

            <div className="search-bar">
              <input type="text" placeholder="Search for fresh groceries..." />
              <button>
                <i className="ri-search-line"></i>
              </button>
            </div>

            <div className="header-actions">
              <button className="action-btn">
                <i className="ri-heart-3-line"></i>
              </button>
              <Link href="/cart" className="action-btn">
                <i className="ri-shopping-bag-line"></i>
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>
              <button className="action-btn">
                <i className="ri-user-3-line"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="nav">
          <div className="container">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setMobileOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
