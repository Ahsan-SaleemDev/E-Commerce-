"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider, useStore } from "../components/Providers";

function CheckoutInner() {
  const { cart, cartCount, subtotal } = useStore();
  const [payMethod, setPayMethod] = useState("card");
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) return (
    <><Header /><div className="empty-state" style={{ padding: 120 }}><div className="empty-icon"><i className="ri-shopping-bag-line"></i></div><h2>Your cart is empty</h2><p>Add items before checking out</p><Link href="/shop" className="btn btn-primary">Shop Now</Link></div><Footer /></>
  );

  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Checkout</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><Link href="/cart">Cart</Link><i className="ri-arrow-right-s-line"></i><span>Checkout</span></div>
        </div>
      </div>
      <div className="container">
        <div className="checkout-grid">
          <div className="checkout-form">
            <div className="cf-block">
              <h3><span className="step">1</span> Contact Information</h3>
              <div className="form-row">
                <div className="form-group"><label>First Name *</label><input type="text" placeholder="John" /></div>
                <div className="form-group"><label>Last Name *</label><input type="text" placeholder="Doe" /></div>
              </div>
              <div className="form-group"><label>Email Address *</label><input type="email" placeholder="john@example.com" /></div>
              <div className="form-group"><label>Phone Number *</label><input type="tel" placeholder="+92 300 1234567" /></div>
            </div>
            <div className="cf-block">
              <h3><span className="step">2</span> Shipping Address</h3>
              <div className="form-group"><label>Street Address *</label><input type="text" placeholder="123 Main Street" /></div>
              <div className="form-row">
                <div className="form-group"><label>City *</label><input type="text" placeholder="Lahore" /></div>
                <div className="form-group"><label>State / Province</label><input type="text" placeholder="Punjab" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>ZIP / Postal Code</label><input type="text" placeholder="54000" /></div>
                <div className="form-group"><label>Country *</label><select><option>Pakistan</option><option>United States</option><option>United Kingdom</option></select></div>
              </div>
              <div className="form-group"><label>Order Notes (optional)</label><textarea placeholder="Special delivery instructions..." /></div>
            </div>
            <div className="cf-block">
              <h3><span className="step">3</span> Payment Method</h3>
              <div className="payment-options">
                {[
                  { id: "card", icon: "ri-bank-card-line", title: "Credit / Debit Card", desc: "Visa, Mastercard" },
                  { id: "bank", icon: "ri-bank-line", title: "Bank Transfer", desc: "Direct bank payment" },
                  { id: "jazzcash", icon: "ri-smartphone-line", title: "JazzCash / EasyPaisa", desc: "Mobile wallet" },
                  { id: "cod", icon: "ri-money-dollar-circle-line", title: "Cash on Delivery", desc: "Pay when you receive" },
                ].map((p) => (
                  <label key={p.id} className={`payment-opt ${payMethod === p.id ? "selected" : ""}`}>
                    <input type="radio" name="pay" checked={payMethod === p.id} onChange={() => setPayMethod(p.id)} />
                    <div className="po-icon"><i className={p.icon}></i></div>
                    <div><h4>{p.title}</h4><p>{p.desc}</p></div>
                  </label>
                ))}
              </div>
            </div>
            <button className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
              <i className="ri-lock-line"></i> Place Order — ${total.toFixed(2)}
            </button>
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--gray-6)" }}>
                <div style={{ width: 52, height: 52, background: "var(--gray-7)", borderRadius: "var(--radius-sm)", padding: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.image} alt={item.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ flex: 1 }}><h4 style={{ fontSize: 13, fontWeight: 600 }}>{item.name}</h4><p style={{ fontSize: 12, color: "var(--gray-3)" }}>Qty: {item.quantity}</p></div>
                <span style={{ fontSize: 14, fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="cs-row" style={{ marginTop: 12 }}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="cs-row"><span>Shipping</span><span style={{ color: shipping === 0 ? "var(--success)" : undefined }}>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="cs-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
            <p style={{ fontSize: 12, color: "var(--gray-3)", textAlign: "center", marginTop: 16 }}><i className="ri-shield-check-line"></i> Your payment is secure</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function CheckoutPage() {
  return <StoreProvider><CheckoutInner /></StoreProvider>;
}
