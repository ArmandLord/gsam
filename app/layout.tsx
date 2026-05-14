import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brice = localFont({
  src: [
    {
      path: "./fonts/Brice-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Brice-Semi-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-brice",
});

export const metadata: Metadata = {
  title: "Samantha & Armando",
  description: "Our wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${brice.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
