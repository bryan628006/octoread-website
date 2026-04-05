"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import FilterDropdown from "@/components/FilterDropdown";
import SessionCard from "@/components/SessionCard";
import { sessions } from "@/lib/sessionData";

const subjectOptions = [
  { label: "Neuroscience", value: "NEUROSCIENCE" },
  { label: "Computer Science", value: "COMPUTER SCIENCE" },
  { label: "Statistics", value: "STATISTICS" },
  { label: "Molecular Bio", value: "MOLECULAR BIO" },
];

const yearOptions = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
];

export default function ArchiveClient() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);

  const filteredSessions = sessions.filter((s) => {
    const matchSubject =
      selectedSubjects.length === 0 || selectedSubjects.includes(s.subject);
    const matchYear =
      selectedYears.length === 0 || selectedYears.includes(s.year);
    return matchSubject && matchYear;
  });

  return (
    <>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <main
        className={`transition-all duration-300 ease-in-out pt-[105px] px-[32px] pb-[60px] ${
          sidebarOpen ? "ml-[256px]" : "ml-[56px]"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Header section */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-[#9f8205] tracking-[3px] uppercase leading-[15px]">
              Sessions
            </span>
            <div className="flex flex-col gap-6">
              <h1 className="text-[48px] font-extrabold text-[#402e31] leading-[48px] tracking-[-1.2px]">
                Archive
              </h1>
              <p className="text-[14px] font-medium text-[rgba(46,47,44,0.6)] leading-[20px] max-w-[672px]">
                Collection of conscious and unconscious highlights gathered via Vellum Edition EEG sensors
              </p>
            </div>
          </div>

          {/* Search bar */}
          <SearchBar />

          {/* Filter dropdowns */}
          <div className="flex items-start gap-3">
            <FilterDropdown
              label="Subject"
              options={subjectOptions}
              selected={selectedSubjects}
              onChange={setSelectedSubjects}
            />
            <FilterDropdown
              label="Year"
              options={yearOptions}
              selected={selectedYears}
              onChange={setSelectedYears}
            />
          </div>

          {/* Session cards */}
          <div className="flex flex-col gap-6">
            {filteredSessions.length === 0 ? (
              <p className="text-[14px] font-medium text-[rgba(46,47,44,0.4)] py-8 text-center">
                No sessions match the selected filters.
              </p>
            ) : (
              filteredSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  id={session.id}
                  subject={session.subject}
                  year={session.year}
                  title={session.title}
                  recordedDate={session.recordedDate}
                  focusScore={session.focusScore}
                  unconsciousGaps={session.unconsciousGaps}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}
