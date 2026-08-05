"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CartSidebar from "./components/CartSidebar";
import CategoryBar from "./components/CategoryBar";
import HeroSlider from "./components/HeroSlider";
import PromoCards from "./components/PromoCards";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import ShopLifestyle from "./components/ShopLifestyle";
import SpecialProducts from "./components/SpecialProducts";
import Recipes from "./components/Recipes";
import AppBanner from "./components/AppBanner";
import Footer from "./components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (index, delta) => {
    setCartItems((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        subtotal={subtotal}
      />
      <Navbar
        onMenuOpen={() => setSidebarOpen(true)}
        onCartOpen={() => setCartOpen(true)}
        cartCount={cartCount}
      />
      <CategoryBar />
      <HeroSlider />
      <PromoCards />
      <div className="part-5">
        <Categories />
        <PopularProducts onAddToCart={addToCart} />
      </div>
      <ShopLifestyle />
      <div className="part-7">
        <div className="left">
          <div className="left-text">
            <h2>
              Make breakfast <br /> healthy and easy
            </h2>
            <a href="">
              Shop now <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <img src="/images/banner.jpg" alt="Breakfast" />
        </div>
        <SpecialProducts onAddToCart={addToCart} />
      </div>
      <Recipes />
      <AppBanner />
      <Footer />
    </main>
  );
}
