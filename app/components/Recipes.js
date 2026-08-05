"use client";

const recipes = [
  {
    img: "/images/recipes/01.jpg",
    title: "Garden saled with a mix of lettuce, cocumber and tomato",
    time: "30 min",
    level: "Easy",
    serves: "4 por",
  },
  {
    img: "/images/recipes/02.jpg",
    title: "Lesberry fresh lemonade with lemon, stawberry syrup and mint",
    time: "50 min",
    level: "Hard",
    serves: "8 por",
  },
  {
    img: "/images/recipes/03 (1).jpg",
    title: "Penne pasta with spinach and zucchini, in a creamy sauce",
    time: "25 min",
    level: "Easy",
    serves: "2 por",
  },
];

export default function Recipes() {
  return (
    <div className="part-8">
      <div className="left">
        <h2>Recipes</h2>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <div className="card" key={i}>
              <div className="left">
                <img src={recipe.img} alt={recipe.title} />
              </div>
              <div className="right">
                <h4>{recipe.title}</h4>
                <div className="icons">
                  <div className="icon">
                    <i className="ri-time-line"></i>
                    <h5>{recipe.time}</h5>
                  </div>
                  <div className="icon">
                    <i className="ri-shining-2-line"></i>
                    <h5>{recipe.level}</h5>
                  </div>
                  <div className="icon">
                    <i className="ri-restaurant-2-fill"></i>
                    <h5>{recipe.serves}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="">
          View all <i className="ri-arrow-right-s-line"></i>
        </a>
      </div>
      <div className="right">
        <div className="right-left">
          <img src="/images/recipes/book-cover.jpg" alt="Cookbook" />
        </div>
        <div className="right-right">
          <h5>Cookbook</h5>
          <h2>The best in Gestronomy</h2>
          <h5>
            Author: <span>Dana Chambers</span>
          </h5>
          <p>
            An exquisite cookbook that takes readers on a culinary journey
            around the world. With stunning photography and detailed
            instructions ...
          </p>
          <h2>$12.40</h2>
          <button>
            Shop book <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
