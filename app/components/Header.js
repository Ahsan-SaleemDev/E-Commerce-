"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "./Providers";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mmOpen, setMmOpen] = useState(false);
  const { cartCount, wishlist } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setMmOpen(false), [pathname]);

  const nav = [
    { href: "/", label: "Home", icon: "ri-home-4-line" },
    { href: "/shop", label: "Shop", icon: "ri-store-2-line" },
    { href: "/blog", label: "Blog", icon: "ri-quill-pen-line" },
    { href: "/faq", label: "FAQ", icon: "ri-question-line" },
    { href: "/contact", label: "Contact", icon: "ri-mail-line" },
  ];

  return (
    <>
      <div className="announcement-bar">
        🎉 Summer Sale! Use code <span>FRESH20</span> for 20% off your first order
        <a href="/shop">Shop Now →</a>
      </div>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-main">
          <div className="container">
            <button className="mobile-nav-toggle action-btn" onClick={() => setMmOpen(true)} style={{ display: "none" }}>
              <i className="ri-menu-line"></i>
            </button>

            <Link href="/" className="logo">
              <div className="logo-icon"><i className="ri-shopping-bag-3-line"></i></div>
              Cart<span>zilla</span>
            </Link>

            <div className="search-wrapper">
              <input type="text" placeholder="Search for products, brands, categories..." />
              <button className="search-btn"><i className="ri-search-line"></i></button>
            </div>

            <div className="header-actions">
              <Link href="/wishlist" className="action-btn">
                <i className="ri-heart-3-line"></i>
                {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
              </Link>
              <Link href="/cart" className="action-btn">
                <i className="ri-shopping-bag-line"></i>
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>
              <Link href="/account" className="action-btn">
                <i className="ri-user-3-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <nav className="nav-bar">
          <div className="container">
            <div className="nav-dept">
              <i className="ri-apps-line"></i> All Categories
            </div>
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}>
                {l.label}
              </Link>
            ))}
            <div className="nav-spacer" />
            <Link href="/account" className="nav-link-sm">
              <i className="ri-map-pin-2-line" /> Track Order
            </Link>
            <Link href="/contact" className="nav-link-sm">
              <i className="ri-customer-service-2-line" /> Help
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mmOpen ? "open" : ""}`} onClick={() => setMmOpen(false)} />
      <div className={`mobile-menu ${mmOpen ? "open" : ""}`}>
        <div className="mm-header">
          <Link href="/" className="logo" style={{ fontSize: 22 }}>
            <div className="logo-icon" style={{ width: 32, height: 32, fontSize: 15 }}><i className="ri-shopping-bag-3-line"></i></div>
            Cart<span>zilla</span>
          </Link>
          <button className="mm-close" onClick={() => setMmOpen(false)}><i className="ri-close-line"></i></button>
        </div>
        <div className="mm-links">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              <i className={l.icon}></i> {l.label}
            </Link>
          ))}
          <Link href="/cart"><i className="ri-shopping-bag-line"></i> Cart ({cartCount})</Link>
          <Link href="/wishlist"><i className="ri-heart-3-line"></i> Wishlist ({wishlist.length})</Link>
          <Link href="/account"><i className="ri-user-3-line"></i> My Account</Link>
        </div>
      </div>
    </>
  );
}
