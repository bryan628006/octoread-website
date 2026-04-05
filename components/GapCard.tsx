"use client";

import { SparkleIcon, BrainWaveIcon } from "./icons";

export interface GapCardProps {
  type: "conscious" | "unconscious";
  quote: string;
  highlightText: string;
  aiSimplification: string;
  focusDropNote?: string;
}

export default function GapCard({
  type,
  quote,
  highlightText,
  aiSimplification,
  focusDropNote,
}: GapCardProps) {
  const isUnconscious = type === "unconscious";

  const borderStyle = isUnconscious
    ? "border-2 border-dashed border-[#ff5e79]"
    : "border-2 border-solid border-black";
  const barColor = isUnconscious ? "bg-[#ff5e79]" : "bg-[#48b0ff]";
  const highlightColor = isUnconscious ? "bg-[#ff889c]" : "bg-[#fac538]";

  const parts = quote.split(highlightText);

  return (
    <div
      className={`bg-white ${borderStyle} rounded-[24px] p-6 flex flex-col gap-6 overflow-hidden w-full hover:shadow-[6px_6px_0px_0px_#2e2f2c] transition-all duration-200 cursor-pointer`}
    >
      {/* Badge */}
      {isUnconscious ? (
        <span className="self-start bg-[rgba(251,208,146,0.5)] border-2 border-dashed border-[#fdbb5b] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] uppercase">
          Unconscious Gaps
        </span>
      ) : (
        <span className="self-start bg-[#92d0ff] border-2 border-solid border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] uppercase">
          Concious Gap
        </span>
      )}

      {/* Quote with vertical bar + highlight */}
      <div className="flex gap-3 items-start w-full">
        <div className={`${barColor} w-[4px] self-stretch flex-shrink-0`} />
        <p className="text-[20px] font-medium text-black leading-[32.5px] flex-1">
          &ldquo;{parts[0]}
          <span className={`${highlightColor} px-0.5`}>{highlightText}</span>
          {parts[1]}&rdquo;
        </p>
      </div>

      {/* AI Simplification box */}
      <div className="bg-[#fefce8] border-2 border-[#2e2f2c] p-[21px] flex flex-col gap-2 relative shadow-[4px_4px_0px_0px_rgba(46,47,44,0.1)]">
        <div className="absolute bg-[rgba(46,47,44,0.05)] h-[12px] left-[33px] -top-[11px] w-[24px]" />
        <div className="flex items-center gap-2">
          <SparkleIcon className="w-[15px] h-[15px] flex-shrink-0" />
          <span className="text-[12px] font-semibold text-[#2e2f2c] leading-[1.667]">
            AI SIMPLIFICATION
          </span>
        </div>
        <p className="text-[16px] font-semibold text-[rgba(46,47,44,0.8)] leading-[1.5]">
          {aiSimplification}
        </p>
      </div>

      {/* Focus drop note (unconscious gaps only) */}
      {focusDropNote && (
        <div className="flex items-start gap-3 bg-[rgba(255,255,255,0.4)] rounded-[16px] px-4 py-2 w-full">
          <BrainWaveIcon className="w-5 h-[16.7px] flex-shrink-0 mt-0.5" />
          <p className="text-[12px] font-bold text-[#2e2f2c] leading-[16px]">
            {focusDropNote}
          </p>
        </div>
      )}
    </div>
  );
}
