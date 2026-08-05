"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider, useStore } from "../components/Providers";

function CartInner() {
  const { cart, cartCount, subtotal, updateQty, removeFromCart } = useStore();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  const shipPct = Math.min((subtotal / 50) * 100, 100);

  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Cart</span></div>
        </div>
      </div>
      <section className="cart-section">
        <div className="container">
          {cart.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><i className="ri-shopping-bag-line"></i></div>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven&rsquo;t added anything yet.</p>
              <Link href="/shop" className="btn btn-primary">Continue Shopping <i className="ri-arrow-right-line"></i></Link>
            </div>
          ) : (
            <div className="cart-grid">
              <div>
                <div className="cart-table">
                  <div className="cart-table-head">
                    <span>Product</span><span>Price</span><span>Quantity</span><span>Total</span><span></span>
                  </div>
                  {cart.map((item) => (
                    <div className="cart-row" key={item.id}>
                      <div className="cart-product">
                        <div className="cp-img"><img src={item.image} alt={item.name} /></div>
                        <div><h4>{item.name}</h4><p>{item.category} • {item.weight}</p></div>
                      </div>
                      <span className="price">${item.price.toFixed(2)}</span>
                      <div className="qty-ctrl" style={{ width: "fit-content" }}>
                        <button onClick={() => updateQty(item.id, -1)}><i className="ri-subtract-line"></i></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)}><i className="ri-add-line"></i></button>
                      </div>
                      <span className="cart-total-cell">${(item.price * item.quantity).toFixed(2)}</span>
                      <button className="cart-remove" onClick={() => removeFromCart(item.id)}><i className="ri-delete-bin-line"></i></button>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                  <Link href="/shop" className="btn btn-ghost"><i className="ri-arrow-left-line"></i> Continue Shopping</Link>
                </div>
              </div>
              <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="cs-row"><span>Subtotal ({cartCount} items)</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="cs-row"><span>Shipping</span><span style={{ color: shipping === 0 ? "var(--success)" : undefined }}>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span></div>
                <div className="free-ship-bar"><div className="fill" style={{ width: `${shipPct}%` }} /></div>
                <p className="free-ship-text">{shipping === 0 ? <><strong>🎉 You qualify for free shipping!</strong></> : <>Add <strong>${(50 - subtotal).toFixed(2)}</strong> more for free shipping</>}</p>
                <div className="promo-input">
                  <input type="text" placeholder="Promo code" />
                  <button className="btn btn-dark btn-sm">Apply</button>
                </div>
                <div className="cs-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                <Link href="/checkout" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
                  Proceed to Checkout <i className="ri-arrow-right-line"></i>
                </Link>
                <p style={{ fontSize: 12, color: "var(--gray-3)", textAlign: "center", marginTop: 12 }}>
                  <i className="ri-lock-line"></i> Secure checkout with SSL encryption
                </p>
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
  return <StoreProvider><CartInner /></StoreProvider>;
}
