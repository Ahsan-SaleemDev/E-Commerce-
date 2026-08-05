"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider } from "../components/Providers";

function ContactInner() {
  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Contact</span></div>
        </div>
      </div>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a question, suggestion, or need help? We&rsquo;d love to hear from you. Our team is available 6 days a week.</p>
            <div className="ci-item">
              <div className="ci-icon"><i className="ri-map-pin-2-line"></i></div>
              <div><h4>Our Address</h4><p>123 Fresh Street, Green Valley, Lahore, Punjab, Pakistan</p></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><i className="ri-phone-line"></i></div>
              <div><h4>Phone</h4><p>+92 300 1234567</p></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><i className="ri-mail-line"></i></div>
              <div><h4>Email</h4><p>support@cartzilla.com</p></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><i className="ri-time-line"></i></div>
              <div><h4>Working Hours</h4><p>Mon – Sat: 8:00 AM – 10:00 PM</p><p>Sunday: 10:00 AM – 6:00 PM</p></div>
            </div>
          </div>
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group"><label>First Name *</label><input type="text" placeholder="John" /></div>
                <div className="form-group"><label>Last Name *</label><input type="text" placeholder="Doe" /></div>
              </div>
              <div className="form-group"><label>Email Address *</label><input type="email" placeholder="john@example.com" /></div>
              <div className="form-group"><label>Subject</label><input type="text" placeholder="How can we help?" /></div>
              <div className="form-group"><label>Message *</label><textarea placeholder="Write your message here..." /></div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
                Send Message <i className="ri-send-plane-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ContactPage() {
  return <StoreProvider><ContactInner /></StoreProvider>;
}
