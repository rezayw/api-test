import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
})

export const metadata = {
  title: "test-api",
  description: "test-api connection and fetch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-amber-950`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

