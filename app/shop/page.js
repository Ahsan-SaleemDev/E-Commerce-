"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toasts from "../components/Toasts";
import ProductCard from "../components/ProductCard";
import { StoreProvider } from "../components/Providers";
import { products, categories } from "../data/products";

function ShopInner() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("popular");
  const [minP, setMinP] = useState("");
  const [maxP, setMaxP] = useState("");
  const [rating, setRating] = useState(0);

  const filtered = useMemo(() => {
    let list = cat === "All" ? [...products] : products.filter((p) => p.category === cat);
    if (minP) list = list.filter((p) => p.price >= Number(minP));
    if (maxP) list = list.filter((p) => p.price <= Number(maxP));
    if (rating) list = list.filter((p) => p.rating >= rating);
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [cat, sort, minP, maxP, rating]);

  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Shop All Products</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Shop</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="shop-layout">
          <aside className="shop-sidebar">
            <div className="filter-block">
              <h3>Categories</h3>
              <label><input type="radio" name="cat" checked={cat === "All"} onChange={() => setCat("All")} /> All Products <span className="count">{products.length}</span></label>
              {categories.map((c) => (
                <label key={c.name}><input type="radio" name="cat" checked={cat === c.name} onChange={() => setCat(c.name)} /> {c.name} <span className="count">{c.count}</span></label>
              ))}
            </div>
            <div className="filter-block">
              <h3>Price Range</h3>
              <div className="price-inputs">
                <input type="number" placeholder="Min" value={minP} onChange={(e) => setMinP(e.target.value)} />
                <span>—</span>
                <input type="number" placeholder="Max" value={maxP} onChange={(e) => setMaxP(e.target.value)} />
              </div>
            </div>
            <div className="filter-block">
              <h3>Rating</h3>
              {[4, 3, 2, 1].map((r) => (
                <label key={r}>
                  <input type="radio" name="rating" checked={rating === r} onChange={() => setRating(rating === r ? 0 : r)} />
                  <span className="stars-filter">{[...Array(5)].map((_, i) => <i key={i} className={i < r ? "ri-star-fill" : "ri-star-line"} />)}</span>
                  & Up
                </label>
              ))}
            </div>
          </aside>
          <div>
            <div className="shop-top">
              <p>Showing <strong>{filtered.length}</strong> of {products.length} products</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>
            </div>
            <div className="products-grid">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="empty-state"><div className="empty-icon"><i className="ri-search-line"></i></div><h2>No products found</h2><p>Try adjusting your filters</p></div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Toasts />
    </>
  );
}

export default function ShopPage() {
  return <StoreProvider><ShopInner /></StoreProvider>;
}
