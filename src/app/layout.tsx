import { Inter } from "next/font/google";
import '@/app/ui/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
