"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current?.value.trim();
    if (keyword) {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        ref={searchRef}
        placeholder="Cari anime..."
        className="w-full p-2 pr-10 rounded bg-white text-black shadow"
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-2 text-amber-500 hover:text-amber-600"
      >
        <MagnifyingGlassIcon size={24} />
      </button>
    </form>
  );
};

export default InputSearch;
