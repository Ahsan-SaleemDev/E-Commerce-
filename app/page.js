"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toasts from "./components/Toasts";
import ProductCard from "./components/ProductCard";
import { StoreProvider, useStore } from "./components/Providers";
import { products, categories, blogPosts } from "./data/products";

function HomeInner() {
  const [catIdx, setCatIdx] = useState(0);
  return (
    <>
      <Header />
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><i className="ri-truck-line"></i> Free Delivery on Orders $50+</div>
            <h1>Get Fresh <em>Groceries</em> Delivered to Your Door</h1>
            <p>Shop from 500+ products including organic produce, pantry essentials, and premium ingredients. Same-day delivery available.</p>
            <div className="hero-btns">
              <Link href="/shop" className="btn btn-primary btn-lg">Shop Now <i className="ri-arrow-right-line"></i></Link>
              <Link href="/about" className="btn btn-outline-white btn-lg">Learn More</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>10K+</h3><p>Happy Customers</p></div>
              <div className="hero-stat"><h3>500+</h3><p>Products</p></div>
              <div className="hero-stat"><h3>4.9★</h3><p>Average Rating</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-wrapper">
              <img src="/images/01.jpg" alt="Fresh groceries" />
            </div>
            <div className="hero-float-card card-1">
              <div className="icon-wrap" style={{ background: "var(--success-light)", color: "var(--success)" }}><i className="ri-truck-line"></i></div>
              <div><h4>Fast Delivery</h4><p>Under 30 minutes</p></div>
            </div>
            <div className="hero-float-card card-2">
              <div className="icon-wrap" style={{ background: "var(--primary-light)", color: "var(--primary)" }}><i className="ri-shield-check-line"></i></div>
              <div><h4>100% Fresh</h4><p>Quality guaranteed</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-strip">
        <div className="container">
          {[
            { icon: "ri-truck-line", title: "Free Shipping", desc: "On orders over $50", bg: "var(--primary-light)", color: "var(--primary)" },
            { icon: "ri-shield-check-line", title: "Fresh Guarantee", desc: "100% fresh products", bg: "var(--success-light)", color: "var(--success)" },
            { icon: "ri-time-line", title: "Same Day Delivery", desc: "Order before 2 PM", bg: "var(--accent-light)", color: "var(--accent)" },
            { icon: "ri-arrow-go-back-line", title: "Easy Returns", desc: "30 day return policy", bg: "var(--danger-light)", color: "var(--danger)" },
          ].map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="fi-icon" style={{ background: f.bg, color: f.color }}><i className={f.icon}></i></div>
              <div><h4>{f.title}</h4><p>{f.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div><h2>Browse Categories</h2><p>Find everything you need</p></div>
            <Link href="/shop" className="link">View All <i className="ri-arrow-right-line"></i></Link>
          </div>
          <div className="categories-scroll">
            {categories.map((c, i) => (
              <Link href="/shop" className={`cat-card ${catIdx === i ? "active" : ""}`} key={i} onMouseEnter={() => setCatIdx(i)}>
                <div className="ci" style={{ background: c.gradient }}><i className={c.icon}></i></div>
                <h4>{c.name}</h4>
                <span>{c.count} products</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div><h2>Popular Products</h2><p>Our best-sellers this week</p></div>
            <Link href="/shop" className="link">View All <i className="ri-arrow-right-line"></i></Link>
          </div>
          <div className="products-grid">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BANNERS */}
      <section className="section-sm">
        <div className="container">
          <div className="banners-row">
            <div className="banner-box">
              <img src="/images/02.jpg" alt="" />
              <div className="banner-overlay">
                <h3>100% Organic</h3>
                <p>Fresh from certified organic farms</p>
                <Link href="/shop" className="btn btn-primary btn-sm">Shop Organic</Link>
              </div>
            </div>
            <div className="banner-box">
              <img src="/images/03.jpg" alt="" />
              <div className="banner-overlay">
                <h3>Summer Sale</h3>
                <p>Up to 30% off on fresh fruits</p>
                <Link href="/shop" className="btn btn-accent btn-sm">Grab Deals</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section className="deals-section">
        <div className="container">
          <div className="deals-left">
            <h2>Deal of the Day</h2>
            <p>Limited time offers on premium products. Don&rsquo;t miss these amazing deals!</p>
            <div className="timer-grid">
              {[{ n: "08", l: "Hours" }, { n: "45", l: "Mins" }, { n: "22", l: "Secs" }].map((t, i) => (
                <div className="timer-box" key={i}><span className="num">{t.n}</span><span className="lbl">{t.l}</span></div>
              ))}
            </div>
            <Link href="/shop" className="btn btn-primary">View All Deals <i className="ri-arrow-right-line"></i></Link>
          </div>
          <div className="deals-right">
            {products.filter((p) => p.tag === "sale").slice(0, 4).map((p) => (
              <Link href={`/shop/${p.id}`} className="deal-mini" key={p.id}>
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <span className="dp">${p.price.toFixed(2)}</span>
                {p.oldPrice && <span className="op">${p.oldPrice.toFixed(2)}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div><h2>From Our Blog</h2><p>Tips, recipes, and more</p></div>
            <Link href="/blog" className="link">All Posts <i className="ri-arrow-right-line"></i></Link>
          </div>
          <div className="blog-grid">
            {blogPosts.map((b) => (
              <div className="blog-card" key={b.id}>
                <div className="bc-img"><img src={b.image} alt={b.title} /></div>
                <div className="bc-body">
                  <div className="bc-meta"><span><i className="ri-calendar-line"></i>{b.date}</span><span><i className="ri-time-line"></i>{b.readTime}</span></div>
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                  <Link href="/blog" className="read-more">Read More <i className="ri-arrow-right-s-line"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay in the Loop</h2>
          <p>Subscribe for exclusive deals, recipes, and fresh produce updates. No spam, ever.</p>
          <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
      <Toasts />
    </>
  );
}

export default function HomePage() {
  return <StoreProvider><HomeInner /></StoreProvider>;
}
