"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-amber-500 shadow-md sticky top-0 z-50">
      <nav className="flex flex-col md:flex-row md:items-center items-center justify-between p-4 gap-2">
        <Link href="/" className="text-white text-2xl font-extrabold tracking-wide">
          API Test
        </Link>
        <InputSearch />
      </nav>
    </header>
  );
};

export default Navbar;
