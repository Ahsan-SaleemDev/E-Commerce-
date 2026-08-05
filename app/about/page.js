"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider, useCart } from "../components/CartProvider";
import Link from "next/link";

function AboutContent() {
  const { cartCount } = useCart();

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>About</span>
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/02.jpg" alt="Our farm" />
            </div>
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                FreshMart started with a simple idea — making fresh, quality
                groceries accessible to everyone. Founded in 2020, we began as a
                small local delivery service connecting farmers directly with
                consumers.
              </p>
              <p>
                Today, we serve thousands of happy customers, delivering fresh
                produce, pantry staples, and household essentials right to their
                doorstep. Our commitment to quality and freshness remains at the
                heart of everything we do.
              </p>
              <p>
                We partner with local farms and trusted suppliers to bring you
                the best products at fair prices. Every item in our store is
                carefully selected to meet our high standards of quality and
                freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header" style={{ justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <h2>Our Values</h2>
              <p>What drives us every day</p>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">
                <i className="ri-leaf-line"></i>
              </div>
              <h3>100% Organic</h3>
              <p>
                We source organic produce from certified farms, ensuring you get
                chemical-free, healthy food for your family.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">
                <i className="ri-truck-line"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>
                Same-day delivery within the city. We ensure your groceries
                arrive fresh and on time, every time.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">
                <i className="ri-heart-3-line"></i>
              </div>
              <h3>Customer First</h3>
              <p>
                Your satisfaction is our priority. Our dedicated support team is
                always ready to help with any questions.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">
                <i className="ri-recycle-line"></i>
              </div>
              <h3>Eco Friendly</h3>
              <p>
                We use sustainable packaging and support local farmers to reduce
                our carbon footprint.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">
                <i className="ri-shield-check-line"></i>
              </div>
              <h3>Quality Assured</h3>
              <p>
                Every product goes through strict quality checks before it
                reaches your doorstep.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">
                <i className="ri-price-tag-3-line"></i>
              </div>
              <h3>Best Prices</h3>
              <p>
                Direct from farms means better prices for you. We cut out the
                middleman to save you money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-2) 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
              textAlign: "center",
            }}
          >
            {[
              { num: "10K+", label: "Happy Customers" },
              { num: "500+", label: "Products" },
              { num: "50+", label: "Local Farms" },
              { num: "99%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  {stat.num}
                </h3>
                <p style={{ color: "var(--gray-3)", fontSize: 15 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function AboutPage() {
  return (
    <CartProvider>
      <AboutContent />
    </CartProvider>
  );
}
