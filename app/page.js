"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { CartProvider, useCart } from "./components/CartProvider";
import { products, categories } from "./data/products";
import Link from "next/link";

function HomePage() {
  const { addToCart, cartCount, toast, hideToast } = useCart();

  return (
    <>
      <Header cartCount={cartCount} />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="ri-truck-line"></i>
              Free Delivery on Orders $50+
            </div>
            <h1>
              Fresh Groceries<br />
              Delivered to<br />
              Your <span>Doorstep</span>
            </h1>
            <p>
              Shop from our wide selection of organic produce, fresh fruits,
              vegetables, and pantry essentials. Quality you can trust.
            </p>
            <div className="hero-buttons">
              <Link href="/shop" className="btn btn-primary">
                Shop Now <i className="ri-arrow-right-line"></i>
              </Link>
              <Link href="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="hero-stat">
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="hero-stat">
                <h3>99%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/01.jpg" alt="Fresh groceries" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">
                <i className="ri-truck-line"></i>
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon">
                <i className="ri-shield-check-line"></i>
              </div>
              <div>
                <h4>Fresh Guarantee</h4>
                <p>100% fresh products</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon">
                <i className="ri-time-line"></i>
              </div>
              <div>
                <h4>Fast Delivery</h4>
                <p>Same day delivery</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon">
                <i className="ri-arrow-go-back-line"></i>
              </div>
              <div>
                <h4>Easy Returns</h4>
                <p>30 day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Browse Categories</h2>
              <p>Find what you need from our wide range</p>
            </div>
            <Link href="/shop">
              View All <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link href="/shop" className="category-card" key={i}>
                <div className="icon" style={{ background: cat.color }}>
                  <i className={cat.icon}></i>
                </div>
                <div>
                  <h3>{cat.name}</h3>
                  <span>{cat.count} products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Popular Products</h2>
              <p>Our best-selling items this week</p>
            </div>
            <Link href="/shop">
              View All <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="products-grid">
            {products.slice(0, 8).map((product) => (
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
      </section>

      {/* Banners */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-grid">
            <div className="banner-card">
              <img src="/images/02.jpg" alt="Organic" />
              <div className="overlay">
                <h3>100% Organic</h3>
                <p>Fresh from farm to table</p>
                <Link href="/shop" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="banner-card">
              <img src="/images/03.jpg" alt="Summer" />
              <div className="overlay">
                <h3>Summer Sale</h3>
                <p>Up to 30% off on fresh fruits</p>
                <Link href="/shop" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="deals-section">
        <div className="container">
          <div className="deals-content">
            <h2>Deal of the Day</h2>
            <p>
              Limited time offers on premium products. Don&rsquo;t miss out on
              these amazing deals!
            </p>
            <div className="timer">
              <div className="timer-box">
                <span className="number">08</span>
                <span className="label">Hours</span>
              </div>
              <div className="timer-box">
                <span className="number">45</span>
                <span className="label">Mins</span>
              </div>
              <div className="timer-box">
                <span className="number">22</span>
                <span className="label">Secs</span>
              </div>
            </div>
            <Link href="/shop" className="btn btn-primary">
              View All Deals <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="deals-products">
            {products
              .filter((p) => p.tag === "sale")
              .slice(0, 4)
              .map((product) => (
                <div className="deal-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <div className="price">
                    ${product.price.toFixed(2)}
                    {product.oldPrice && (
                      <span
                        className="old"
                        style={{
                          textDecoration: "line-through",
                          color: "var(--gray-3)",
                          fontSize: 14,
                          marginLeft: 8,
                          fontWeight: 500,
                        }}
                      >
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for the latest deals, recipes, and fresh
            produce updates.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <Toast message={toast.message} isVisible={toast.visible} onClose={hideToast} />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
