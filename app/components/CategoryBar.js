"use client";

const categories = [
  { img: "/images/th01.png", name: "Weekly sale" },
  { img: "/images/th02.png", name: "Image Vegetables" },
  { img: "/images/th03.png", name: "Ester is coming" },
  { img: "/images/th04.png", name: "Poultry meat" },
  { img: "/images/th05.png", name: "Fresh fruits" },
  { img: "/images/th06.png", name: "St. Patricks day" },
  { img: "/images/th01.png", name: "Exotic fruits" },
];

export default function CategoryBar() {
  return (
    <div className="part-2">
      {categories.map((cat, i) => (
        <div className="img-text" key={i}>
          <div className="img">
            <img src={cat.img} alt={cat.name} />
          </div>
          <h5>{cat.name}</h5>
        </div>
      ))}
    </div>
  );
}
