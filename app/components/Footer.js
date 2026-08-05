"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ color: "white" }}>
              <div className="logo-icon"><i className="ri-shopping-bag-3-line"></i></div>
              Cart<span>zilla</span>
            </Link>
            <p>Your one-stop shop for fresh groceries, organic produce, and everyday essentials. Delivered fresh to your doorstep.</p>
            <div className="social-row">
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a>
              <a href="#"><i className="ri-twitter-x-line"></i></a>
              <a href="#"><i className="ri-youtube-line"></i></a>
              <a href="#"><i className="ri-tiktok-line"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/shop">All Products</Link>
            <a href="#">Fresh Fruits</a>
            <a href="#">Vegetables</a>
            <a href="#">Dairy & Eggs</a>
            <a href="#">Meat & Seafood</a>
            <a href="#">Bakery</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link href="/account">My Account</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/wishlist">Wishlist</Link>
            <a href="#">Order History</a>
            <a href="#">Track Order</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link href="/faq">FAQ</Link>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cartzilla. All rights reserved. Made with <i className="ri-heart-fill" style={{ color: "var(--danger)" }}></i> by <a href="#">Ahsan Mehar</a></span>
          <div className="footer-payments">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>📱 JazzCash</span>
            <span>📱 EasyPaisa</span>
            <span>🏦 Bank</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
