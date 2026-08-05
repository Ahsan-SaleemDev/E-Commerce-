"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StoreProvider } from "../components/Providers";
import { blogPosts } from "../data/products";

function BlogInner() {
  return (
    <>
      <Header />
      <div className="page-banner">
        <div className="container">
          <h1>Our Blog</h1>
          <div className="breadcrumb"><Link href="/">Home</Link><i className="ri-arrow-right-s-line"></i><span>Blog</span></div>
        </div>
      </div>
      <div className="container">
        <div className="blog-grid">
          {blogPosts.map((b) => (
            <div className="blog-card" key={b.id}>
              <div className="bc-img"><img src={b.image} alt={b.title} /></div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span><i className="ri-calendar-line"></i> {b.date}</span>
                  <span><i className="ri-time-line"></i> {b.readTime}</span>
                  <span><i className="ri-price-tag-3-line"></i> {b.category}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <a href="#" className="read-more">Read More <i className="ri-arrow-right-s-line"></i></a>
              </div>
            </div>
          ))}
          {[
            { id: 4, title: "Seasonal Produce Guide: What to Buy in August", excerpt: "Make the most of summer with these in-season fruits and vegetables that are at their peak flavor and nutrition.", image: "/images/banner.jpg", date: "Aug 1, 2026", readTime: "6 min", category: "Guides" },
            { id: 5, title: "How to Store Fresh Produce for Maximum Freshness", excerpt: "Learn the best storage techniques to keep your fruits and vegetables fresh for longer and reduce food waste.", image: "/images/01.jpg", date: "Jul 25, 2026", readTime: "5 min", category: "Tips" },
            { id: 6, title: "The Benefits of Shopping Local and Organic", excerpt: "Discover why choosing local and organic products benefits your health, community, and the environment.", image: "/images/02.jpg", date: "Jul 18, 2026", readTime: "7 min", category: "Health" },
          ].map((b) => (
            <div className="blog-card" key={b.id}>
              <div className="bc-img"><img src={b.image} alt={b.title} /></div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span><i className="ri-calendar-line"></i> {b.date}</span>
                  <span><i className="ri-time-line"></i> {b.readTime}</span>
                  <span><i className="ri-price-tag-3-line"></i> {b.category}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <a href="#" className="read-more">Read More <i className="ri-arrow-right-s-line"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function BlogPage() {
  return <StoreProvider><BlogInner /></StoreProvider>;
}
