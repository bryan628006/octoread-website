"use client";

import Link from "next/link";
import { MenuIcon, DashboardIcon, BookIcon, SupportIcon, SignOutIcon } from "./icons";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  activePage?: "dashboard" | "archive";
}

export default function Sidebar({ open, onToggle, activePage = "archive" }: SidebarProps) {
  const navItems = [
    { id: "dashboard" as const, label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
    { id: "archive" as const, label: "Archive", href: "/", icon: BookIcon },
  ];

  return (
    <>
      {/* Sidebar panel */}
      <aside
        className={`fixed left-0 top-[63px] h-[calc(100vh-63px)] bg-[#faf9f5] border border-[#2e2f2c] flex flex-col justify-between z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "w-[256px] px-[16.5px] py-[36.5px]" : "w-[56px] px-[16px] py-[36.5px]"
        }`}
      >
        {/* Top section */}
        <div>
          <div className="flex flex-col items-end gap-6">
            {/* Hamburger toggle */}
            <button
              onClick={onToggle}
              className="text-[#2e2f2c] hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0 -mt-3"
              aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            {/* Expanded content — fades out when collapsed */}
            <div
              className={`flex flex-col gap-6 items-start w-full transition-all duration-200 ${
                open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Profile card */}
              <div className="w-[222px]">
                <div className="bg-white border-2 border-[#2e2f2c] rounded-[12px] shadow-[2px_2px_0px_0px_#2e2f2c] flex items-center gap-3 p-[13px]">
                  <div className="w-10 h-10 rounded-full border-2 border-[#2e2f2c] flex-shrink-0 overflow-hidden">
                    <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[14px] font-bold text-[#2e2f2c] leading-[20px] whitespace-nowrap">
                    John Doe
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-[10px] w-[222px]">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  const Icon = item.icon;
                  return isActive ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center gap-3 px-[17px] py-[9px] w-full bg-[#fac538] border-2 border-[#2e2f2c] rounded-[48px] shadow-[2px_2px_0px_0px_#2e2f2c] hover:shadow-[3px_3px_0px_0px_#2e2f2c] transition-shadow cursor-pointer text-left no-underline"
                    >
                      <Icon className="w-6 h-6 text-[#2e2f2c] flex-shrink-0" />
                      <span className="text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2 w-full opacity-70 hover:opacity-100 hover:bg-[rgba(46,47,44,0.04)] rounded-[48px] transition-all cursor-pointer text-left no-underline"
                    >
                      <Icon className="w-6 h-6 text-[#4b4b4a] flex-shrink-0" />
                      <span className="text-[14px] font-semibold text-[#4b4b4a] tracking-[0.35px] leading-[20px] whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom section — only visible when open */}
        <div
          className={`border-t border-[rgba(46,47,44,0.1)] pt-[17px] flex flex-col gap-2 transition-all duration-200 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <button className="flex items-center gap-3 px-4 py-2 opacity-60 hover:opacity-100 transition-opacity w-full cursor-pointer text-left">
            <SupportIcon className="w-5 h-5 text-[#2e2f2c] flex-shrink-0" />
            <span className="text-[14px] font-semibold text-[#2e2f2c] leading-[20px] whitespace-nowrap">
              Support
            </span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 opacity-60 hover:opacity-100 transition-opacity w-full cursor-pointer text-left">
            <SignOutIcon className="w-[18px] h-[18px] text-[#2e2f2c] flex-shrink-0" />
            <span className="text-[14px] font-semibold text-[#2e2f2c] leading-[20px] whitespace-nowrap">
              Sign Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
