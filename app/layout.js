import "./globals.css";

export const metadata = {
  title: "FreshMart - Fresh Groceries Delivered",
  description: "Shop fresh groceries, organic produce, and everyday essentials with fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
