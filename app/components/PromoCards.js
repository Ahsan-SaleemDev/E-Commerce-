"use client";

const promos = [
  {
    count: "124 products",
    title: "Only fresh fish\nto your table",
    img: "/images/01.png",
    bg: "pink",
  },
  {
    count: "97 products",
    title: "products for\nEaster table",
    img: "/images/02.png",
    bg: "green",
  },
  {
    count: "28 products",
    title: "Berries from\nthe garden",
    img: "/images/03.png",
    bg: "blue",
  },
];

export default function PromoCards() {
  return (
    <div className="part-4">
      {promos.map((promo, i) => (
        <div className="box" key={i}>
          <div className="box-text">
            <h6>{promo.count}</h6>
            <h3>
              {promo.title.split("\n").map((line, j) => (
                <span key={j}>
                  {line}
                  {j === 0 && <br />}
                </span>
              ))}
            </h3>
            <a href="">
              Shop now <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <img src={promo.img} alt="" />
        </div>
      ))}
    </div>
  );
}
