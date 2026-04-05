import { OctoLogo } from "./icons";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end backdrop-blur-[6px] bg-[#faf9f5] border-b border-[#56392f] px-[24.5px] py-[15.5px]">
      <div className="flex items-center gap-3">
        <OctoLogo className="w-[30px] h-[32px]" />
        <span className="text-[24px] font-normal text-[#2e2f2c] leading-[1.333]">
          Octoread
        </span>
      </div>
    </header>
  );
}
