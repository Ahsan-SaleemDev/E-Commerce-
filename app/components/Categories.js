"use client";

const categoriesList = [
  { img: "/images/01 (1).png", name: "Bakery & bread", count: "230 products" },
  { img: "/images/02 (1).png", name: "Vegetables", count: "180 products" },
  { img: "/images/03 (1).png", name: "Fresh fruits", count: "205 products" },
  { img: "/images/04.png", name: "Meet italian dinner", count: "309 products" },
  { img: "/images/05.png", name: "Beverages", count: "372 products" },
  { img: "/images/06.png", name: "Meet products", count: "124 products" },
  { img: "/images/07.png", name: "Sauces and keptchup", count: "219 products" },
  { img: "/images/08.png", name: "Dairy and eggs", count: "146 products" },
];

export default function Categories() {
  return (
    <div className="left">
      <h2>Categories</h2>
      <div className="categories">
        {categoriesList.map((cat, i) => (
          <div className="category" key={i}>
            <div className="left">
              <img src={cat.img} alt={cat.name} />
            </div>
            <div className="right">
              <h3>{cat.name}</h3>
              <h6>{cat.count}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
