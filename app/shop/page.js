"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import { CartProvider, useCart } from "../components/CartProvider";
import { products, categories } from "../data/products";
import Link from "next/link";

function ShopContent() {
  const { addToCart, cartCount, toast, hideToast } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="page-banner">
        <div className="container">
          <h1>Shop</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="sidebar-filter">
            <div className="filter-group">
              <h3>Categories</h3>
              <label>
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === "All"}
                  onChange={() => setSelectedCategory("All")}
                />
                All Products
              </label>
              {categories.map((cat) => (
                <label key={cat.name}>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.name}
                    onChange={() => setSelectedCategory(cat.name)}
                  />
                  {cat.name}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Price Range</h3>
              <div className="price-range">
                <input type="number" placeholder="Min" min="0" />
                <span>—</span>
                <input type="number" placeholder="Max" min="0" />
              </div>
            </div>

            <div className="filter-group">
              <h3>Rating</h3>
              {[4, 3, 2, 1].map((r) => (
                <label key={r}>
                  <input type="checkbox" />
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={i < r ? "ri-star-fill" : "ri-star-line"}
                      style={{
                        fontSize: 14,
                        color: i < r ? "var(--accent)" : "var(--gray-4)",
                      }}
                    ></i>
                  ))}
                  <span>& Up</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Products */}
          <div>
            <div className="shop-header">
              <p>
                Showing <strong>{sorted.length}</strong> products
              </p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="products-grid">
              {sorted.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="image-wrapper">
                    <img src={product.image} alt={product.name} />
                    {product.tag && (
                      <span className={`tag ${product.tag}`}>
                        {product.tag === "sale" ? "SALE" : "NEW"}
                      </span>
                    )}
                    <div className="actions">
                      <button>
                        <i className="ri-heart-3-line"></i>
                      </button>
                      <Link href={`/shop/${product.id}`}>
                        <i className="ri-eye-line"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="info">
                    <span className="category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="rating">
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
                      <span>({product.reviews})</span>
                    </div>
                    <div className="price-row">
                      <div className="price">
                        ${product.price.toFixed(2)}
                        {product.oldPrice && (
                          <span className="old">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button
                        className="add-btn"
                        onClick={() => addToCart(product)}
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Toast message={toast.message} isVisible={toast.visible} onClose={hideToast} />
    </>
  );
}

export default function ShopPage() {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
}
