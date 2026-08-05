"use client";

export default function Footer() {
  return (
    <div className="part-10">
      <div className="top">
        <h1>Stay in touch with us</h1>
        <h5>Receive the latest update about our products & promotions</h5>
        <div className="search-box">
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="bottom">
        <div className="top">
          <div className="top-left">
            <h2>Cartzilla</h2>
            <p>
              With a wide selection of fresh produce, pantry staples, and
              household essentials, we've got everything you need just a click
              away.
            </p>
            <div className="icons">
              <a href="">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="">
                <i className="ri-telegram-2-line"></i>
              </a>
              <a href="">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <div className="top-right">
            <div className="box">
              <h3>Categories</h3>
              <a href="">Weekly sale</a>
              <a href="">Special price</a>
              <a href="">Easter is coming</a>
              <a href="">Italian dinner</a>
              <a href="">Fresh fruits</a>
              <a href="">Exotic fruits</a>
            </div>
            <div className="box">
              <h3>Company</h3>
              <a href="">Blog and news</a>
              <a href="">About us</a>
              <a href="">FAQ page</a>
              <a href="">Contact us</a>
              <a href="">Careers</a>
            </div>
            <div className="box">
              <h3>Account</h3>
              <a href="">Your account</a>
              <a href="">Shipping & policies</a>
              <a href="">Refunds & replacements</a>
              <a href="">Order tracking</a>
              <a href="">Delivery info</a>
              <a href="">Taxes & fees</a>
            </div>
            <div className="box">
              <h3>Customer service</h3>
              <a href="">Payment methods</a>
              <a href="">Money back guarantee</a>
              <a href="">Refunds & replacements</a>
              <a href="">Order tracking</a>
              <a href="">Delivery info</a>
              <a href="">Shipping</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            © All rights reserved. Made with by{" "}
            <i className="ri-heart-fill"></i> <a href="">Ahsan Mehar</a>
          </p>
        </div>
      </div>
    </div>
  );
}
