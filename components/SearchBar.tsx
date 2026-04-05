"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "./icons";

export default function SearchBar() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchValue.trim()) {
      const q = searchValue.trim().toLowerCase();
      if (q.startsWith("article")) {
        router.push(`/article/${q.replace(/\s+/g, "-")}`);
      } else {
        router.push(`/concept/${q.replace(/\s+/g, "-")}`);
      }
    }
  }

  return (
    <div className="w-full">
      <div className="bg-white border border-[#80807e] rounded-[8px] flex items-center justify-between p-4 focus-within:border-[#2e2f2c] focus-within:shadow-[0px_1px_8px_0px_rgba(25,33,61,0.12)] transition-all duration-200">
        <input
          type="text"
          placeholder="Search for other entries..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          className="flex-1 text-[14px] font-normal text-[#191c1e] placeholder-[#d9d9d9] bg-transparent outline-none leading-[20px]"
        />
        <SearchIcon className="w-3 h-3 text-[#d9d9d9] flex-shrink-0 ml-2" />
      </div>
    </div>
  );
}
