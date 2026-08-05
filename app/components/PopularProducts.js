"use client";

const popularProducts = [
  { name: "Muesli Fitness Energy, gluten free", src: "/images/add to cart/01.png", price: 2.15, weight: "500g" },
  { name: "Fresh orange Klementina, Spain", src: "/images/add to cart/02.png", price: 3.12, weight: "1kg" },
  { name: "Pepsi soda classic, can", src: "/images/add to cart/03.png", price: 0.8, weight: "330ml" },
  { name: "Mozzarella mini cheese Granaloro", src: "/images/add to cart/04.png", price: 2.99, weight: "250g" },
  { name: "Coconut, Indonesia", src: "/images/add to cart/05.png", price: 1.24, weight: "1 coconut" },
  { name: "Pesto sauce Barilla with parmesan and basil", src: "/images/add to cart/06.png", price: 3.95, weight: "200g" },
  { name: "Fresh mango, Spain", src: "/images/add to cart/07.png", price: 1.99, weight: "1 mango" },
  { name: "Fresh green asparagus, bunch", src: "/images/add to cart/08.png", price: 2.4, weight: "300g" },
];

export default function PopularProducts({ onAddToCart }) {
  return (
    <div className="right">
      <div className="top">
        <h2>Popular products</h2>
        <a href="">
          View all <i className="ri-arrow-right-s-line"></i>
        </a>
      </div>
      <div className="bottom">
        {popularProducts.map((product, i) => (
          <div className="card" key={i}>
            <div className="img">
              <img src={product.src} alt={product.name} />
              <i className="ri-heart-3-line while"></i>
              <i className="ri-eye-line quickview1"></i>
              <i
                className="ri-shopping-cart-line addto"
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
