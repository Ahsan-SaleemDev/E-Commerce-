"use client";

const specialItems = [
  { name: "Pure virgin olive oil Basso", src: "/images/add to cart/09.png", price: 18.6, weight: "1000ml" },
  { name: "Fresh pork butt steaks with rosemary", src: "/images/add to cart/10.png", price: 9.15, weight: "500g" },
  { name: "Fresh red grapefruit", src: "/images/add to cart/11.png", price: 3.4, weight: "1kg" },
  { name: "Soft creme cheese with greens Exquisa", src: "/images/add to cart/12.png", price: 2.59, weight: "150g" },
];

export default function SpecialProducts({ onAddToCart }) {
  return (
    <div className="right">
      <div className="top">
        <h2>Special products</h2>
        <a href="">
          View all <i className="ri-arrow-right-s-line"></i>
        </a>
      </div>
      <div className="bottom">
        {specialItems.map((product, i) => (
          <div className="card hover" key={i}>
            <div className="img">
              <img src={product.src} alt={product.name} />
              <i className="ri-heart-3-line"></i>
              <i className="ri-eye-line"></i>
              <i
                className="ri-shopping-cart-line add"
                onClick={() => onAddToCart(product)}
              ></i>
            </div>
            <h3 id="price">${product.price}</h3>
            <h5 id="name">{product.name}</h5>
            <h5 id="weight">{product.weight}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
