"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import GapCard from "@/components/GapCard";
import SectionHeader from "@/components/SectionHeader";
import FilterDropdown from "@/components/FilterDropdown";
import { ArrowLeftIcon, BrainIcon, CalendarIcon, FocusIcon, GapIcon } from "./icons";
import type { SessionData } from "@/lib/sessionData";

const gapTypeOptions = [
  { label: "Conscious Gaps", value: "conscious" },
  { label: "Unconscious Gaps", value: "unconscious" },
];

interface Props {
  session: SessionData;
}

export default function SessionDetailClient({ session }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedGapTypes, setSelectedGapTypes] = useState<string[]>([]);

  return (
    <>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <main
        className={`transition-all duration-300 ease-in-out pt-[63px] ${
          sidebarOpen ? "ml-[256px]" : "ml-[56px]"
        }`}
      >
        <div className="flex flex-col gap-[32px] items-center">
          {/* Session header card */}
          <div className="bg-white border-2 border-[#2e2f2c] px-[25px] py-[25px] shadow-[0px_6px_0px_0px_#2e2f2c] w-full">
            <div className="flex items-center gap-5 w-full">
              {/* Back arrow */}
              <Link
                href="/"
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>

              {/* Brain icon */}
              <div className="w-16 h-16 rounded-full bg-[rgba(74,101,79,0.1)] border border-[rgba(74,101,79,0.2)] flex items-center justify-center flex-shrink-0">
                <BrainIcon className="w-5 h-5 text-[rgba(74,101,79,0.6)]" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667] uppercase">
                    {session.subject}
                  </span>
                  <div className="w-[6px] h-[6px] rounded-full bg-[#9f8205]" />
                  <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667]">
                    {session.year}
                  </span>
                </div>
                <h1 className="text-[24px] font-extrabold text-[#2e2f2c] leading-normal">
                  {session.title}
                </h1>
                <div className="flex items-center gap-5 h-[17px]">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-[10px] h-[10px] text-[rgba(46,47,44,0.4)]" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      Recorded {session.recordedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FocusIcon className="w-[10px] h-[8.35px] text-[rgba(46,47,44,0.4)]" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      Focus Score: {session.focusScore}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GapIcon className="w-[10px] h-[10px] text-[rgba(46,47,44,0.4)]" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      {session.unconsciousGaps} Unconscious Gaps
                    </span>
                  </div>
                </div>
              </div>

              {/* Total badges */}
              <div className="flex items-center gap-5 flex-shrink-0">
                <span className="bg-[#92d0ff] border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap uppercase">
                  {session.totalConscious} Concious Gap
                </span>
                <span className="bg-[rgba(251,208,146,0.5)] border-2 border-dashed border-[#fdbb5b] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap uppercase">
                  {session.totalUnconscious} Unconscious Gaps
                </span>
              </div>
            </div>
          </div>

          {/* Body: section nav + content */}
          <div className="flex gap-[32px] items-start w-full px-[30px] pb-16">
            {/* Left: section split bar */}
            <div className="flex flex-col gap-[16px] flex-shrink-0">
              {session.sectionNames.map((name, i) => {
                const isActive = activeSection === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSection(i)}
                    className={`flex items-center gap-[7px] cursor-pointer text-left transition-all duration-200 ${
                      isActive ? "" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-[14px] h-[1.5px] flex-shrink-0 ${
                        isActive ? "bg-[#9f8205]" : "bg-[#80807e]"
                      }`}
                    />
                    <span
                      className={`font-bold leading-[1.5] whitespace-nowrap ${
                        isActive
                          ? "text-[16px] text-[#9f8205]"
                          : "text-[14px] text-[#80807e]"
                      }`}
                    >
                      {name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: main content */}
            <div className="flex-1 flex flex-col gap-[16px] min-w-0">
              {/* Gap type filter */}
              <FilterDropdown
                label="Gap Type"
                options={gapTypeOptions}
                selected={selectedGapTypes}
                onChange={setSelectedGapTypes}
              />

              {/* Active section */}
              {session.sections[activeSection] && (() => {
                const section = session.sections[activeSection];
                const filteredGaps = selectedGapTypes.length === 0
                  ? section.gaps
                  : section.gaps.filter((g) => selectedGapTypes.includes(g.type));
                const filteredConscious = filteredGaps.filter((g) => g.type === "conscious").length;
                const filteredUnconscious = filteredGaps.filter((g) => g.type === "unconscious").length;

                return (
                  <div className="flex flex-col gap-[31px]">
                    <SectionHeader
                      title={section.title}
                      consciousCount={filteredConscious}
                      unconsciousCount={filteredUnconscious}
                    />
                    <div className="flex flex-col gap-[24px]">
                      {filteredGaps.length === 0 ? (
                        <p className="text-[14px] font-medium text-[rgba(46,47,44,0.4)] py-4">
                          No gaps match the selected filter in this section.
                        </p>
                      ) : (
                        filteredGaps.map((gap, gi) => (
                          <GapCard key={gi} {...gap} />
                        ))
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
