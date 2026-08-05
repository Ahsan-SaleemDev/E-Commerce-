"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    badge: "🔥 Free shipping - order over $50",
 title: "Healthy Food Available to Everyone",
    img: "/images/01.jpg",
  },
  {
    badge: "🥦 Organic products to your table",
    title: "Organic eggs from home-grown chicken",
    img: "/images/02.jpg",
    titleClass: "eggs",
  },
  {
    badge: "Only natural ingredients",
    title: "Enjoy refreshing summer drink",
    img: "/images/03.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="part-3">
      {slides.map((slide, i) => (
        <div key={i} className={`img ${i === current ? "active" : ""}`}>
          <div className="img-text">
            <h5>{slide.badge}</h5>
            <h1 className={slide.titleClass || ""}>{slide.title}</h1>
            <button>Shop now</button>
          </div>
          <img src={slide.img} alt={slide.title} />
        </div>
      ))}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
