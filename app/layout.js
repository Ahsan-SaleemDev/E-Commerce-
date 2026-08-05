import "./globals.css";

export const metadata = {
  title: "Cartzilla - E Commerce Project",
  description:
    "Fresh produce, pantry staples, and household essentials delivered to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
