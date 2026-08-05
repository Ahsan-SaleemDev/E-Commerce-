"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Toast from "../../components/Toast";
import { CartProvider, useCart } from "../../components/CartProvider";
import { products } from "../../data/products";
import Link from "next/link";

function ProductDetailContent() {
  const params = useParams();
  const { addToCart, cartCount, toast, hideToast } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <>
        <Header cartCount={cartCount} />
        <div className="empty-state" style={{ padding: "120px 0" }}>
          <i className="ri-error-warning-line"></i>
          <h2>Product Not Found</h2>
          <p>The product you&rsquo;re looking for doesn&rsquo;t exist.</p>
          <Link href="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="page-banner">
        <div className="container">
          <h1>{product.name}</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link href="/shop">Shop</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      <section className="product-detail">
        <div className="container">
          <div className="product-layout">
            <div className="product-gallery">
              <div className="main-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="thumbnails">
                <div className="thumb active">
                  <img src={product.image} alt="" />
                </div>
              </div>
            </div>

            <div className="product-info">
              <span
                className="category"
                style={{
                  fontSize: 13,
                  color: "var(--primary)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {product.category}
              </span>
              <h1>{product.name}</h1>

              <div className="rating-row">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "ri-star-fill"
                        : "ri-star-line"
                    }
                  ></i>
                ))}
                <span>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="price-block">
                <span className="current-price">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="old-price">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="discount-badge">
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              <p className="description">{product.description}</p>

              <div className="quantity-row">
                <div className="quantity-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <i className="ri-add-line"></i>
                  </button>
                </div>
                <button className="btn btn-primary add-cart-btn" onClick={handleAdd}>
                  <i className="ri-shopping-bag-line"></i>
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              <div className="meta">
                <p>
                  <i className="ri-check-line"></i>
                  In stock — {product.weight}
                </p>
                <p>
                  <i className="ri-truck-line"></i>
                  Free shipping on orders over $50
                </p>
                <p>
                  <i className="ri-shield-check-line"></i>
                  Freshness guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div style={{ marginTop: 80 }}>
              <div className="section-header">
                <div>
                  <h2>Related Products</h2>
                  <p>You might also like these</p>
                </div>
              </div>
              <div className="products-grid">
                {related.map((p) => (
                  <div className="product-card" key={p.id}>
                    <div className="image-wrapper">
                      <img src={p.image} alt={p.name} />
                      <div className="actions">
                        <button>
                          <i className="ri-heart-3-line"></i>
                        </button>
                        <Link href={`/shop/${p.id}`}>
                          <i className="ri-eye-line"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="info">
                      <span className="category">{p.category}</span>
                      <h3>{p.name}</h3>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < Math.floor(p.rating)
                                ? "ri-star-fill"
                                : "ri-star-line"
                            }
                          ></i>
                        ))}
                        <span>({p.reviews})</span>
                      </div>
                      <div className="price-row">
                        <div className="price">
                          ${p.price.toFixed(2)}
                          {p.oldPrice && (
                            <span className="old">
                              ${p.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button
                          className="add-btn"
                          onClick={() => addToCart(p)}
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <Toast message={toast.message} isVisible={toast.visible} onClose={hideToast} />
    </>
  );
}

export default function ProductDetailPage() {
  return (
    <CartProvider>
      <ProductDetailContent />
    </CartProvider>
  );
}
