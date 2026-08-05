export const products = [
  { id:1, name:"Organic Fresh Strawberries", category:"Fruits", price:4.99, oldPrice:6.99, image:"/images/add to cart/01.png", rating:4.8, reviews:124, tag:"sale", description:"Sweet and juicy organic strawberries, hand-picked from local farms. Perfect for smoothies, desserts, or healthy snacking. Rich in vitamins and antioxidants.", weight:"500g", sku:"FR-001", brand:"Farm Fresh" },
  { id:2, name:"Premium Orange Juice", category:"Beverages", price:3.49, image:"/images/add to cart/02.png", rating:4.6, reviews:89, tag:"new", description:"Freshly squeezed premium orange juice with no added sugar. Rich in Vitamin C and natural goodness. Perfect for breakfast.", weight:"1L", sku:"BV-002", brand:"Tropicana" },
  { id:3, name:"Classic Italian Pasta", category:"Pantry", price:2.99, image:"/images/add to cart/03.png", rating:4.9, reviews:256, description:"Authentic Italian pasta made from durum wheat. Perfect for your favorite pasta recipes. Al dente in 8 minutes.", weight:"500g", sku:"PN-003", brand:"Barilla" },
  { id:4, name:"Fresh Mozzarella Cheese", category:"Dairy", price:5.49, oldPrice:7.99, image:"/images/add to cart/04.png", rating:4.7, reviews:178, tag:"sale", description:"Creamy fresh mozzarella cheese, perfect for caprese salads, pizza, and Italian dishes.", weight:"250g", sku:"DY-004", brand:"Garnalu" },
  { id:5, name:"Organic Coconut Oil", category:"Pantry", price:8.99, image:"/images/add to cart/05.png", rating:4.5, reviews:92, description:"Cold-pressed organic coconut oil for cooking, baking, and natural beauty care.", weight:"500ml", sku:"PN-005", brand:"CocoNature" },
  { id:6, name:"Basil Pesto Sauce", category:"Sauces", price:4.29, image:"/images/add to cart/06.png", rating:4.8, reviews:143, tag:"new", description:"Traditional basil pesto made with fresh basil, pine nuts, and Parmesan cheese.", weight:"200g", sku:"SC-006", brand:"Barilla" },
  { id:7, name:"Fresh Ripe Mangoes", category:"Fruits", price:3.99, oldPrice:5.49, image:"/images/add to cart/07.png", rating:4.9, reviews:312, tag:"sale", description:"Sweet and aromatic mangoes, perfectly ripe and ready to eat. A tropical delight!", weight:"1kg", sku:"FR-007", brand:"Farm Fresh" },
  { id:8, name:"Green Asparagus Bundle", category:"Vegetables", price:3.49, image:"/images/add to cart/08.png", rating:4.4, reviews:67, description:"Fresh green asparagus, perfect for grilling, roasting, or steaming.", weight:"300g", sku:"VG-008", brand:"Green Valley" },
  { id:9, name:"Extra Virgin Olive Oil", category:"Pantry", price:12.99, oldPrice:16.99, image:"/images/add to cart/09.png", rating:4.9, reviews:445, tag:"hot", description:"Premium extra virgin olive oil, cold-pressed from the finest olives. Perfect for cooking and dressing.", weight:"1L", sku:"PN-009", brand:"Basso" },
  { id:10, name:"Rosemary Pork Steaks", category:"Meat", price:9.99, image:"/images/add to cart/10.png", rating:4.6, reviews:189, tag:"new", description:"Tender pork butt steaks seasoned with fresh rosemary. Ready to cook.", weight:"500g", sku:"MT-010", brand:"Prime Cuts" },
  { id:11, name:"Fresh Red Grapefruit", category:"Fruits", price:2.99, image:"/images/add to cart/11.png", rating:4.3, reviews:56, description:"Tangy and sweet red grapefruit, packed with vitamins and antioxidants.", weight:"1kg", sku:"FR-011", brand:"Farm Fresh" },
  { id:12, name:"Cream Cheese with Herbs", category:"Dairy", price:3.29, image:"/images/add to cart/12.png", rating:4.7, reviews:134, description:"Smooth cream cheese blended with fresh herbs. Perfect for bagels and dips.", weight:"150g", sku:"DY-012", brand:"Exquisa" },
];

export const categories = [
  { name:"Fruits", icon:"ri-plant-line", count:45, color:"#fef3c7", gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
  { name:"Vegetables", icon:"ri-leaf-line", count:62, color:"#d1fae5", gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
  { name:"Dairy", icon:"ri-drop-line", count:38, color:"#dbeafe", gradient:"linear-gradient(135deg,#dbeafe,#bfdbfe)" },
  { name:"Meat", icon:"ri-restaurant-line", count:29, color:"#fee2e2", gradient:"linear-gradient(135deg,#fee2e2,#fecaca)" },
  { name:"Beverages", icon:"ri-cup-line", count:51, color:"#ede9fe", gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
  { name:"Pantry", icon:"ri-archive-2-line", count:73, color:"#fff7ed", gradient:"linear-gradient(135deg,#fff7ed,#ffedd5)" },
  { name:"Sauces", icon:"ri-flask-line", count:24, color:"#fce7f3", gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)" },
  { name:"Bakery", icon:"ri-cake-3-line", count:36, color:"#f0fdf4", gradient:"linear-gradient(135deg,#f0fdf4,#dcfce7)" },
];

export const blogPosts = [
  { id:1, title:"10 Tips for Eating Healthy on a Budget", excerpt:"Discover practical ways to maintain a nutritious diet without breaking the bank. From meal planning to smart shopping strategies.", image:"/images/01.jpg", date:"Aug 2, 2026", readTime:"5 min", category:"Health" },
  { id:2, title:"The Ultimate Guide to Organic Produce", excerpt:"Everything you need to know about organic farming, certifications, and why organic produce might be worth the extra cost.", image:"/images/02.jpg", date:"Jul 28, 2026", readTime:"8 min", category:"Organic" },
  { id:3, title:"5 Quick & Delicious Weeknight Dinners", excerpt:"Short on time? These five recipes can be prepared in under 30 minutes using fresh ingredients from our store.", image:"/images/03.jpg", date:"Jul 20, 2026", readTime:"4 min", category:"Recipes" },
];

export const faqs = [
  { q:"How does delivery work?", a:"We offer same-day delivery for orders placed before 2 PM. Orders after 2 PM will be delivered the next day. Free delivery is available for orders over $50." },
  { q:"What is your return policy?", a:"If you're not satisfied with the freshness of any product, contact us within 24 hours of delivery for a full refund or replacement. We stand behind the quality of everything we sell." },
  { q:"Are your products really organic?", a:"Yes! All our organic products are certified by recognized organic certification bodies. We work directly with farms that follow strict organic farming practices." },
  { q:"Do you offer subscription plans?", a:"Yes, we offer weekly and monthly subscription plans for regular deliveries. Subscribers get 10% off on all orders and free delivery regardless of order value." },
  { q:"How do I track my order?", a:"Once your order is dispatched, you'll receive an SMS and email with a tracking link. You can also track your order in real-time from your account dashboard." },
  { q:"What payment methods do you accept?", a:"We accept all major credit/debit cards, bank transfers, mobile wallets (JazzCash, EasyPaisa), and cash on delivery for orders under $100." },
];

export const reviews = [
  { user:"Sarah K.", rating:5, date:"2 days ago", text:"Amazing quality! The strawberries were super fresh and sweet. Will definitely order again. Delivery was fast too!" },
  { user:"Ahmed R.", rating:4, date:"1 week ago", text:"Good quality products overall. The olive oil is excellent. Packaging could be a bit better but happy with the purchase." },
  { user:"Maria L.", rating:5, date:"2 weeks ago", text:"Best online grocery experience! Everything arrived fresh and well-packed. The mozzarella was restaurant quality." },
];
