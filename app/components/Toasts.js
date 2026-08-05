"use client";
import { useStore } from "./Providers";

export default function Toasts() {
  const { toasts } = useStore();
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type} show`}>
          <i className={t.type === "error" ? "ri-close-circle-line" : "ri-check-double-line"} />
          {t.msg}
        </div>
      ))}
    </div>
  );
}
