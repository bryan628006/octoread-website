interface SectionHeaderProps {
  title: string;
  consciousCount: number;
  unconsciousCount: number;
}

export default function SectionHeader({
  title,
  consciousCount,
  unconsciousCount,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-5 w-full">
      <div className="flex items-center gap-[23px] flex-1">
        <h2 className="text-[24px] font-extrabold text-[#9f8205] leading-normal whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-[3px] bg-[rgba(46,47,44,0.12)]" />
      </div>
      <div className="flex items-center gap-5 flex-shrink-0">
        <span className="bg-[#92d0ff] border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap uppercase">
          {consciousCount} Concious Gap
        </span>
        <span className="bg-[rgba(251,208,146,0.5)] border-2 border-dashed border-[#fdbb5b] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap uppercase">
          {unconsciousCount} Unconscious Gaps
        </span>
      </div>
    </div>
  );
}
