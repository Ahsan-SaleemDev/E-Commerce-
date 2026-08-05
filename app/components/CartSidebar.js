"use client";

export default function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, subtotal }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="overlay"
        style={{
          transform: "translateX(0)",
          opacity: 1,
          zIndex: 9999999999,
        }}
        onClick={onClose}
      ></div>
      <div
        className="pop-right"
        style={{
          transform: "translateX(0)",
          opacity: 1,
          zIndex: 9999999998,
        }}
      >
        <div className="top">
          <div className="heading">
            <h2>Shopping cart</h2>
            <i className="ri-close-large-line" onClick={onClose}></i>
          </div>
          {subtotal >= 50 && (
            <div className="delivery-free" style={{ display: "block" }}>
              <p>
                Congratulations 🎉 You have added more than <span>$50</span> to
                your cart. <span>Delivery is free</span> for you!
              </p>
            </div>
          )}
        </div>
        <div className="center">
          {cartItems.map((item, index) => (
            <div className="addtocart" key={index}>
              <div className="left">
                <img src={item.src} alt={item.name} />
              </div>
              <div className="cen">
                <h5 id="name">{item.name}</h5>
                <h4 id="price">${item.price.toFixed(2)}</h4>
                <div className="quantity">
                  <i
                    className="ri-subtract-line"
                    onClick={() => onUpdateQuantity(index, -1)}
                  ></i>
                  <span>{item.quantity}</span>
                  <i
                    className="ri-add-line"
                    onClick={() => onUpdateQuantity(index, 1)}
                  ></i>
                </div>
              </div>
              <div className="right">
                <i
                  className="ri-close-large-line"
                  onClick={() => onRemoveItem(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="top-btm">
            <h3>Subtotal:</h3>
            <h3 id="subtotal">${subtotal.toFixed(2)}</h3>
          </div>
          <div className="btm-btm">
            <button className="view-cart">View cart</button>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
