import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ImageProtection } from "@/components/ImageProtection";

export const metadata: Metadata = {
  title: "Shirelle Ganon Moragrega | Photography",
  description: "Photography portfolio of Shirelle Ganon Moragrega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ImageProtection />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
