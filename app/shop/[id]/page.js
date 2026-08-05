"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Toasts from "../../components/Toasts";
import ProductCard from "../../components/ProductCard";
import { StoreProvider, useStore } from "../../components/Providers";
import { products, reviews } from "../../data/products";

function PDInner() {
  const params = useParams();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return (
    <><Header /><div className="empty-state" style={{ padding: 120 }}><div className="empty-icon"><i className="ri-error-warning-line"></i></div><h2>Product Not Found</h2><Link href="/shop" className="btn btn-primary">Back to Shop</Link></div><Footer /></>
  );

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isWished = wishlist.some((w) => w.id === product.id);
  const disc = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>{product.name}</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i>
            <Link href="/shop">Shop</Link><i className="ri-arrow-right-s-line"></i><span>{product.name}</span>
          </div>
        </div>
      </div>
      <section className="pd-section">
        <div className="container">
          <div className="pd-grid">
            <div className="pd-gallery">
              <div className="pd-main-img"><img src={product.image} alt={product.name} /></div>
              <div className="pd-thumbs">
                <div className="pd-thumb active"><img src={product.image} alt="" /></div>
              </div>
            </div>
            <div className="pd-info">
              <div className="pd-cat">{product.category} • {product.brand}</div>
              <h1>{product.name}</h1>
              <div className="pd-rating">
                {[...Array(5)].map((_, i) => <i key={i} className={i < Math.floor(product.rating) ? "ri-star-fill" : "ri-star-line"} />)}
                <span>{product.rating}</span><span className="sep">|</span><span>{product.reviews} reviews</span><span className="sep">|</span><span>SKU: {product.sku}</span>
              </div>
              <div className="pd-price-block">
                <span className="pd-price">${product.price.toFixed(2)}</span>
                {product.oldPrice && <><span className="pd-old-price">${product.oldPrice.toFixed(2)}</span><span className="pd-discount">-{disc}%</span></>}
              </div>
              <p className="pd-desc">{product.description}</p>
              <div className="pd-qty-row">
                <div className="qty-ctrl">
                  <button onClick={() => setQty(Math.max(1, qty - 1))}><i className="ri-subtract-line"></i></button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)}><i className="ri-add-line"></i></button>
                </div>
                <span style={{ fontSize: 14, color: "var(--gray-2)" }}>× {product.weight}</span>
              </div>
              <div className="pd-actions">
                <button className="btn btn-primary btn-lg" style={{ flex: 1, justifyContent: "center" }} onClick={() => addToCart(product, qty)}>
                  <i className="ri-shopping-bag-line"></i> Add to Cart — ${(product.price * qty).toFixed(2)}
                </button>
                <button className="btn btn-lg btn-icon" style={{ border: "2px solid var(--gray-5)", color: isWished ? "var(--danger)" : "var(--gray-1)" }} onClick={() => toggleWishlist(product)}>
                  <i className={isWished ? "ri-heart-3-fill" : "ri-heart-3-line"}></i>
                </button>
              </div>
              <div className="pd-meta">
                <p><i className="ri-check-double-line" style={{ color: "var(--success)" }}></i> In Stock — Ready to ship</p>
                <p><i className="ri-truck-line" style={{ color: "var(--primary)" }}></i> Free shipping on orders over $50</p>
                <p><i className="ri-shield-check-line" style={{ color: "var(--accent)" }}></i> Freshness guaranteed for 7 days</p>
                <p><i className="ri-arrow-go-back-line" style={{ color: "var(--gray-2)" }}></i> Easy 30-day returns</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="pd-tabs">
            <div className="tab-btns">
              {["Description", "Additional Info", `Reviews (${reviews.length})`].map((t, i) => (
                <button key={i} className={`tab-btn ${tab === i ? "active" : ""}`} onClick={() => setTab(i)}>{t}</button>
              ))}
            </div>
            <div className="tab-content">
              {tab === 0 && <><p>{product.description}</p><ul><li>Fresh and organic</li><li>Locally sourced from certified farms</li><li>No artificial preservatives</li><li>Rich in essential nutrients</li></ul></>}
              {tab === 1 && <><p><strong>Weight:</strong> {product.weight}</p><p><strong>Brand:</strong> {product.brand}</p><p><strong>SKU:</strong> {product.sku}</p><p><strong>Category:</strong> {product.category}</p></>}
              {tab === 2 && reviews.map((r, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid var(--gray-6)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <strong style={{ fontSize: 14 }}>{r.user}</strong>
                    <span style={{ fontSize: 12, color: "var(--gray-3)" }}>{r.date}</span>
                    <span>{[...Array(5)].map((_, j) => <i key={j} className={j < r.rating ? "ri-star-fill" : "ri-star-line"} style={{ fontSize: 13, color: "var(--accent)" }} />)}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--gray-1)" }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <div className="section-header"><div><h2>Related Products</h2><p>You might also like</p></div></div>
              <div className="products-grid">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <Toasts />
    </>
  );
}

export default function ProductDetailPage() {
  return <StoreProvider><PDInner /></StoreProvider>;
}
