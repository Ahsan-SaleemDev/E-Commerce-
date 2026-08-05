"use client";

import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState({ message: "", visible: false });

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setToast({ message: `${product.name} added to cart!`, visible: true });
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        toast,
        hideToast: () => setToast({ ...toast, visible: false }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
