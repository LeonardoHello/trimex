import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./global.css";

export const revalidate = 30;

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
