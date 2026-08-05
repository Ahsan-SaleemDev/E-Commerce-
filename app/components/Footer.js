"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Fresh<span>Mart</span>
            </Link>
            <p>
              Your one-stop shop for fresh groceries, organic produce, and
              everyday essentials. Delivered fresh to your doorstep.
            </p>
            <div className="social-links">
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a>
              <a href="#"><i className="ri-twitter-x-line"></i></a>
              <a href="#"><i className="ri-youtube-line"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/shop">All Products</Link>
            <a href="#">Fresh Fruits</a>
            <a href="#">Vegetables</a>
            <a href="#">Dairy & Eggs</a>
            <a href="#">Meat & Seafood</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">Track Order</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FreshMart. All rights reserved.</span>
          <span>
            Made with <i className="ri-heart-fill" style={{ color: "var(--danger)" }}></i> by{" "}
            <a href="#">Ahsan Mehar</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
