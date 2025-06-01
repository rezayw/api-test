import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utilities/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "test-api",
  description: "test-api connection and fetch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

