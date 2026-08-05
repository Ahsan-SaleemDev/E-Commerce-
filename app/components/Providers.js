"use client";
import { createContext, useContext, useState, useCallback } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.id === product.id);
      if (ex) return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + qty } : i);
      return [...prev, { ...product, quantity: qty }];
    });
    addToast(`${product.name} added to cart!`);
  }, [addToast]);

  const updateQty = useCallback((id, delta) => {
    setCart((p) => p.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((p) => p.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        addToast("Removed from wishlist", "error");
        return prev.filter((i) => i.id !== product.id);
      }
      addToast("Added to wishlist!");
      return [...prev, product];
    });
  }, [addToast]);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <StoreContext.Provider value={{ cart, cartCount, subtotal, addToCart, updateQty, removeFromCart, clearCart, wishlist, toggleWishlist, toasts, addToast }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
