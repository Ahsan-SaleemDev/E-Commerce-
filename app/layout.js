import "./globals.css";

export const metadata = {
  title: "Cartzilla — Premium Grocery Store",
  description: "Shop fresh groceries, organic produce, and everyday essentials with fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
