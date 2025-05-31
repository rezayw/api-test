
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Test API",
  description: "API Testing Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${geistSans.variable} \${geistMono.variable}\`}>
      <body className="antialiased bg-white text-black">
        <div className="p-4 text-xl font-bold">TESTING</div>
        {children}
      </body>
    </html>
  );
}
