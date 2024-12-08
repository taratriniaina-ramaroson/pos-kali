import { Inter } from "@/assets/fonts";
import "@/assets/styles/globals.css";
import Navbar from "@/components/layout/Navbar/navbar";
import type { Metadata } from "next";

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
      <body className={`${Inter.variable} antialiased flex min-h-screen`}>
        <Navbar />
        <main className="flex-grow bg-slate-50 p-6">{children}</main>
      </body>
    </html>
  );
}
