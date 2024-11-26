import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

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
        className={`${inter.className} flex max-h-screen flex-col overflow-y-scroll`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
