"use client";
import Link from "next/link";
import { useStore } from "./Providers";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWished = wishlist.some((w) => w.id === product.id);

  return (
    <div className="product-card">
      <div className="pc-image">
        <img src={product.image} alt={product.name} />
        {product.tag && <span className={`pc-tag ${product.tag}`}>{product.tag === "sale" ? "Sale" : product.tag === "new" ? "New" : "Hot"}</span>}
        <div className="pc-actions">
          <button onClick={() => toggleWishlist(product)} style={{ color: isWished ? "var(--danger)" : undefined }}>
            <i className={isWished ? "ri-heart-3-fill" : "ri-heart-3-line"}></i>
          </button>
          <Link href={`/shop/${product.id}`}><i className="ri-eye-line"></i></Link>
        </div>
        <div className="pc-quick-add">
          <button onClick={() => addToCart(product)}>
            <i className="ri-shopping-bag-line"></i> Add to Cart
          </button>
        </div>
      </div>
      <div className="pc-info">
        <span className="pc-category">{product.category}</span>
        <h3><Link href={`/shop/${product.id}`}>{product.name}</Link></h3>
        <div className="pc-rating">
          {[...Array(5)].map((_, i) => <i key={i} className={i < Math.floor(product.rating) ? "ri-star-fill" : "ri-star-line"} />)}
          <span className="count">({product.reviews})</span>
        </div>
        <div className="pc-price-row">
          <div className="pc-price">
            ${product.price.toFixed(2)}
            {product.oldPrice && <span className="old">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <button className="pc-cart-btn" onClick={() => addToCart(product)}>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
