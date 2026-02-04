import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // You might want to use Inter since index.css imported it from Google Fonts, but we can stick to Geist or use the CSS import.
// For now, let's keep the CSS import for fonts in globals.css and just use the layout.

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Vitality Digital Tech",
  description: "Professional Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
