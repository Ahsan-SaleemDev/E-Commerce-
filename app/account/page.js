"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider, useStore } from "../components/Providers";

function AccInner() {
  const { cartCount } = useStore();
  const orders = [
    { id: "ORD-2026-001", date: "Aug 4, 2026", items: 5, total: 34.96, status: "delivered" },
    { id: "ORD-2026-002", date: "Jul 28, 2026", items: 3, total: 18.47, status: "processing" },
    { id: "ORD-2026-003", date: "Jul 15, 2026", items: 8, total: 52.31, status: "shipped" },
  ];

  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>My Account</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Account</span></div>
        </div>
      </div>
      <div className="container">
        <div className="account-grid">
          <div className="account-sidebar">
            <div className="as-user">
              <div className="avatar">A</div>
              <h3>Ahsan Mehar</h3>
              <p>ahsan@example.com</p>
            </div>
            <div className="as-nav">
              <a href="#" className="active"><i className="ri-dashboard-line"></i> Dashboard</a>
              <a href="#"><i className="ri-shopping-bag-line"></i> Orders ({cartCount})</a>
              <Link href="/wishlist"><i className="ri-heart-3-line"></i> Wishlist</Link>
              <a href="#"><i className="ri-map-pin-2-line"></i> Addresses</a>
              <a href="#"><i className="ri-user-settings-line"></i> Account Details</a>
              <a href="#"><i className="ri-logout-box-r-line"></i> Logout</a>
            </div>
          </div>
          <div className="account-content">
            <h2>Dashboard</h2>
            <p style={{ color: "var(--gray-2)", marginBottom: 28 }}>Hello Ahsan! Welcome to your account dashboard. From here you can manage your orders, addresses, and account details.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 36 }}>
              {[
                { icon: "ri-shopping-bag-line", num: "3", label: "Total Orders", bg: "var(--primary-light)", color: "var(--primary)" },
                { icon: "ri-money-dollar-circle-line", num: "$105.74", label: "Total Spent", bg: "var(--success-light)", color: "var(--success)" },
                { icon: "ri-truck-line", num: "1", label: "In Transit", bg: "var(--accent-light)", color: "var(--accent)" },
              ].map((s, i) => (
                <div key={i} style={{ background: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--gray-5)", padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}><i className={s.icon}></i></div>
                  <div><h3 style={{ fontSize: 22, fontWeight: 800 }}>{s.num}</h3><p style={{ fontSize: 13, color: "var(--gray-2)" }}>{s.label}</p></div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Recent Orders</h3>
            <div style={{ background: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--gray-5)", overflow: "hidden" }}>
              <table className="orders-table">
                <thead><tr><th>Order ID</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th></tr></thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td style={{ fontWeight: 600 }}>{o.id}</td>
                      <td>{o.date}</td>
                      <td>{o.items} items</td>
                      <td style={{ fontWeight: 700 }}>${o.total.toFixed(2)}</td>
                      <td><span className={`status-badge ${o.status}`}>{o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function AccountPage() {
  return <StoreProvider><AccInner /></StoreProvider>;
}
