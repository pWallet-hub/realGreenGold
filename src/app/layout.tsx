import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Green Gold",
  description: "Real Green Gold Ltd - Integrated farming enterprise in Kirehe, Rwanda.",
  icons: {
    icon: "/assets/real.jpg",
    shortcut: "/assets/real.jpg",
    apple: "/assets/real.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
