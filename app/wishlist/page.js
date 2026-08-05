"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toasts from "../components/Toasts";
import ProductCard from "../components/ProductCard";
import { StoreProvider, useStore } from "../components/Providers";

function WLInner() {
  const { wishlist } = useStore();
  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>My Wishlist</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Wishlist</span></div>
        </div>
      </div>
      <div className="container">
        {wishlist.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><i className="ri-heart-3-line"></i></div>
            <h2>Your wishlist is empty</h2>
            <p>Save items you love for later.</p>
            <Link href="/shop" className="btn btn-primary">Browse Products <i className="ri-arrow-right-line"></i></Link>
          </div>
        ) : (
          <div className="wishlist-grid">{wishlist.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        )}
      </div>
      <Footer />
      <Toasts />
    </>
  );
}

export default function WishlistPage() {
  return <StoreProvider><WLInner /></StoreProvider>;
}
