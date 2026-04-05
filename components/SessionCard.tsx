"use client";

import Link from "next/link";
import { ArrowRightIcon, BrainIcon, CalendarIcon, FocusIcon, GapIcon } from "./icons";

interface SessionCardProps {
  id: string;
  subject: string;
  year: string;
  title: string;
  recordedDate: string;
  focusScore: string;
  unconsciousGaps: number;
}

export default function SessionCard({
  id,
  subject,
  year,
  title,
  recordedDate,
  focusScore,
  unconsciousGaps,
}: SessionCardProps) {
  return (
    <Link href={`/session/${id}`} className="group bg-white border-2 border-[#2e2f2c] rounded-[16px] px-[25px] py-[25px] w-full opacity-90 hover:opacity-100 hover:shadow-[6px_6px_0px_0px_#2e2f2c] transition-all duration-200 cursor-pointer block no-underline">
      <div className="flex items-center gap-5 w-full">
        {/* Brain icon in green circle */}
        <div className="w-16 h-16 rounded-full bg-[rgba(74,101,79,0.1)] border border-[rgba(74,101,79,0.2)] flex items-center justify-center flex-shrink-0">
          <BrainIcon className="w-5 h-5 text-[rgba(74,101,79,0.6)]" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          {/* Category + year */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667] uppercase">
              {subject}
            </span>
            <div className="w-[6px] h-[6px] rounded-full bg-[#9f8205]" />
            <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667]">
              {year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[24px] font-extrabold text-[#2e2f2c] leading-normal">
            {title}
          </h3>

          {/* Metadata row */}
          <div className="flex items-center gap-5 h-[17px]">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-[10px] h-[10px] text-[rgba(46,47,44,0.4)]" />
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Recorded {recordedDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FocusIcon className="w-[10px] h-[8.35px] text-[rgba(46,47,44,0.4)]" />
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Focus Score: {focusScore}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GapIcon className="w-[10px] h-[10px] text-[rgba(46,47,44,0.4)]" />
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                {unconsciousGaps} Unconscious Gaps
              </span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <ArrowRightIcon className="w-5 h-5 text-[#2e2f2c] group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
