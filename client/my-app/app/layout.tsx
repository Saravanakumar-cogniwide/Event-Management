import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Management",
  description: "Managing the events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar/>
         {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        {children}
        {/* </main> */}
        <Footer/>
        </body>
    </html>
  );
}
