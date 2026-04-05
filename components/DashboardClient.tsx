"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import FilterDropdown from "@/components/FilterDropdown";
import OceanChart from "@/components/OceanChart";
import RiverChart from "@/components/RiverChart";
import { SearchIcon } from "./icons";

const yearOptions = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

const subjectOptions = [
  { label: "Biology", value: "biology" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Physics", value: "physics" },
];

export default function DashboardClient() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState<"ocean" | "river">("ocean");
  const [searchValue, setSearchValue] = useState("");
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

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
    <>
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
        activePage="dashboard"
      />

      <main
        className={`transition-all duration-300 ease-in-out pt-[99px] px-[30px] pb-[60px] ${
          sidebarOpen ? "ml-[256px]" : "ml-[56px]"
        }`}
      >
        <div className="flex flex-col gap-[24px]">
          {/* Search bar + filter */}
          <div className="flex flex-col gap-[12px]">
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
            <div className="flex gap-[12px]">
              <FilterDropdown
                label="Year"
                options={yearOptions}
                selected={selectedYears}
                onChange={setSelectedYears}
              />
              {activeView === "river" && (
                <FilterDropdown
                  label="Subject"
                  options={subjectOptions}
                  selected={selectedSubjects}
                  onChange={setSelectedSubjects}
                />
              )}
            </div>
          </div>

          {/* Header: subtitle + title + toggle */}
          <div className="flex flex-col gap-[4px]">
            {activeView === "river" && (
              <p className="text-[14px] font-bold text-[rgba(25,28,30,0.16)] leading-[1.571]">
                Topic: Biology
              </p>
            )}
            <p className="text-[14px] font-semibold text-[#4b4b4a] leading-[1.571]">
              {activeView === "ocean"
                ? "Macro Overview of Your Habits"
                : "Micro Snapshot of a learning Category"}
            </p>
            <div className="flex items-center justify-between">
              <h1 className="text-[40px] font-bold text-[#56392f] leading-[1.6]">
                {activeView === "ocean" ? "The Ocean" : <>The <span className="text-[#f5a623]">Biology</span> River</>}
              </h1>

              {/* River / Ocean toggle */}
              <div className="bg-[#fac538] flex items-center gap-2 px-2 py-[6px] rounded-[15px]">
                <button
                  onClick={() => setActiveView("river")}
                  className={`flex items-center justify-center px-3 py-1 rounded-[12px] w-[130px] transition-all duration-200 cursor-pointer ${
                    activeView === "river"
                      ? "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  <span
                    className={`text-[16px] font-semibold leading-[1.5] ${
                      activeView === "river" ? "text-black" : "text-[#4b4b4a]"
                    }`}
                  >
                    River
                  </span>
                </button>
                <button
                  onClick={() => setActiveView("ocean")}
                  className={`flex items-center justify-center px-3 py-1 rounded-[12px] w-[130px] transition-all duration-200 cursor-pointer ${
                    activeView === "ocean"
                      ? "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  <span
                    className={`text-[16px] font-semibold leading-[1.5] ${
                      activeView === "ocean" ? "text-black" : "text-[#4b4b4a]"
                    }`}
                  >
                    Ocean
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Active filters indicator */}
          {(selectedYears.length > 0 || selectedSubjects.length > 0) && (
            <div className="bg-[#fff9e6] border border-[#f5a623] rounded-[12px] px-4 py-3 flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[#2e2f2c]">
                Active filters:
              </span>
              {selectedYears.length > 0 && (
                <span className="bg-white border border-[#2e2f2c] rounded-full px-3 py-1 text-[12px] font-bold text-[#2e2f2c]">
                  {selectedYears.join(", ")}
                </span>
              )}
              {selectedSubjects.length > 0 && (
                <span className="bg-white border border-[#2e2f2c] rounded-full px-3 py-1 text-[12px] font-bold text-[#2e2f2c]">
                  {selectedSubjects.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(", ")}
                </span>
              )}
            </div>
          )}

          {/* Chart */}
          {activeView === "ocean" ? (
            <OceanChart view={activeView} />
          ) : (
            <RiverChart />
          )}
        </div>
      </main>
    </>
  );
}
