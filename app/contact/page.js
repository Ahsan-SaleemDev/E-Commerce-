"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider, useCart } from "../components/CartProvider";
import Link from "next/link";

function ContactContent() {
  const { cartCount } = useCart();

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have a question, suggestion, or need help? We&rsquo;d love to
                hear from you. Reach out and we&rsquo;ll get back to you as soon
                as possible.
              </p>

              <div className="contact-item">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Fresh Street, Green Valley, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>support@freshmart.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message <i className="ri-send-plane-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <CartProvider>
      <ContactContent />
    </CartProvider>
  );
}
