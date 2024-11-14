import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import { Footer } from "@/components/Footer";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trimex",
  description:
    "Trimex je obrt koji se bavi uređenjem vrtova, košenjem, čišćenjem vanjskih površina, montaži namještaja, pressure-washing i sličnim djelatnostima - tzv. „handyman” djelatnosti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
