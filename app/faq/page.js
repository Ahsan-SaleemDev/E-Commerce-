"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider } from "../components/Providers";
import { faqs } from "../data/products";

function FAQInner() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>FAQ</span></div>
        </div>
      </div>
      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  {f.q}
                  <i className="ri-arrow-down-s-line"></i>
                </div>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Still have questions?</h3>
            <p style={{ color: "var(--gray-2)", marginBottom: 20 }}>Can&rsquo;t find the answer you&rsquo;re looking for? We&rsquo;re here to help.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us <i className="ri-arrow-right-line"></i></Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function FAQPage() {
  return <StoreProvider><FAQInner /></StoreProvider>;
}
