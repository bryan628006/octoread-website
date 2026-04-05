"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "./icons";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
}

export default function FilterDropdown({
  label,
  options,
  selected: controlledSelected,
  onChange,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const selected = controlledSelected ?? internalSelected;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleOption(value: string) {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    if (onChange) {
      onChange(next);
    } else {
      setInternalSelected(next);
    }
  }

  const activeCount = selected.length;

  return (
    <div className="relative inline-flex flex-col items-start" ref={ref}>
      {/* Trigger pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-[10px] bg-[#f9f9fc] border border-[#6f797a] rounded-[12px] px-[17px] py-[9px] transition-all duration-200 cursor-pointer ${
          open
            ? "bg-[#f0f0f5] border-[#5a6364] shadow-[0px_1px_3px_0px_rgba(46,47,44,0.1)]"
            : "hover:bg-[#f0f0f5] hover:border-[#5a6364] hover:shadow-[0px_1px_3px_0px_rgba(46,47,44,0.1)]"
        }`}
      >
        <span className="text-[14px] font-semibold text-[#6f797a] leading-[1.571] text-center whitespace-nowrap">
          {label}
          {activeCount > 0 && (
            <span className="ml-1.5 inline-flex items-center justify-center bg-[#fac538] text-[#2e2f2c] text-[11px] font-bold rounded-full w-[18px] h-[18px] leading-none">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDownIcon
          className={`w-[14px] h-[14px] text-[#6f797a] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 mt-1.5 z-50 bg-[#f9f9fc] border border-[#bec8ca] rounded-[12px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] overflow-hidden min-w-[180px] animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="py-1">
            {options.map((option) => {
              const isChecked = selected.includes(option.value);
              return (
                <button
                  key={option.value}
                  onClick={() => toggleOption(option.value)}
                  className="flex items-center gap-[10px] w-full px-3 py-[6px] h-[32px] text-left cursor-pointer hover:bg-[rgba(46,47,44,0.04)] transition-colors duration-100"
                >
                  <div
                    className={`w-[14px] h-[14px] rounded-[3px] border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                      isChecked
                        ? "bg-[#fac538] border-[#fac538]"
                        : "bg-white border-[#bec8ca] hover:border-[#9f8205]"
                    }`}
                  >
                    {isChecked && (
                      <svg
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.5L3.5 6L8 1"
                          stroke="#2e2f2c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] font-normal text-[#191c1e] leading-[1.571] truncate">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
