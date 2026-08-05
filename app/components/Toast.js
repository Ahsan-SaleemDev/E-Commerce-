"use client";

import { useEffect } from "react";

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`toast ${isVisible ? "show" : ""}`}>
      <i className="ri-check-line"></i>
      {message}
    </div>
  );
}
