import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});



export const metadata: Metadata = {
  title: "Aman's portfolio",
  description: "Here is a glimpse of me, my projects, my skills and what role i would like to play further in my professional career!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-black antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
