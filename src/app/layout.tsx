import type { Metadata } from "next";
import { Inter } from "@/assets/fonts";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Kali",
  description: "Kali - Point of Sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${Inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
