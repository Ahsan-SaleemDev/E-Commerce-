"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider, useCart } from "../components/CartProvider";
import Link from "next/link";

function CartContent() {
  const { items, cartCount, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="page-banner">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <section className="cart-page">
        <div className="container">
          {items.length === 0 ? (
            <div className="empty-state">
              <i className="ri-shopping-bag-line"></i>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven&rsquo;t added any items yet.</p>
              <Link href="/shop" className="btn btn-primary">
                Continue Shopping <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="details">
                      <h3>{item.name}</h3>
                      <p className="meta">
                        {item.category} • {item.weight}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="quantity-control">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>
                        <div className="price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <button
                      className="remove"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h2>Order Summary</h2>
                <div className="row">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="row">
                  <span>Shipping</span>
                  <span
                    style={{
                      color: shipping === 0 ? "var(--success)" : "inherit",
                    }}
                  >
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--gray-2)",
                      padding: "8px 0",
                    }}
                  >
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary">
                  Proceed to Checkout <i className="ri-arrow-right-line"></i>
                </button>
                <Link
                  href="/shop"
                  className="btn btn-ghost"
                  style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}
