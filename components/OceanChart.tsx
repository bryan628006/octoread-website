"use client";

import { useState, useRef, useCallback } from "react";

interface OceanChartProps {
  view: "ocean" | "river";
}

const oceanTimeline = [
  { pct: 0.02, time: "9:00 AM", concentrated: 8, distracted: 5 },
  { pct: 0.10, time: "9:45 AM", concentrated: 12, distracted: 9 },
  { pct: 0.18, time: "10:15 AM", concentrated: 17, distracted: 14 },
  { pct: 0.26, time: "10:45 AM", concentrated: 22, distracted: 19 },
  { pct: 0.34, time: "11:15 AM", concentrated: 26, distracted: 23 },
  { pct: 0.42, time: "11:45 AM", concentrated: 30, distracted: 27 },
  { pct: 0.50, time: "12:30 PM", concentrated: 28, distracted: 30 },
  { pct: 0.58, time: "1:30 PM", concentrated: 32, distracted: 26 },
  { pct: 0.66, time: "3:00 PM", concentrated: 36, distracted: 30 },
  { pct: 0.74, time: "5:00 PM", concentrated: 40, distracted: 34 },
  { pct: 0.82, time: "7:00 PM", concentrated: 44, distracted: 38 },
  { pct: 0.90, time: "9:00 PM", concentrated: 48, distracted: 42 },
  { pct: 0.98, time: "11:00 PM", concentrated: 52, distracted: 46 },
];

const riverTimeline = [
  { pct: 0.07, time: "Mon", concentrated: 18, distracted: 12 },
  { pct: 0.22, time: "Tue", concentrated: 24, distracted: 20 },
  { pct: 0.36, time: "Wed", concentrated: 32, distracted: 28 },
  { pct: 0.50, time: "Thu", concentrated: 35, distracted: 30 },
  { pct: 0.64, time: "Fri", concentrated: 28, distracted: 32 },
  { pct: 0.78, time: "Sat", concentrated: 22, distracted: 18 },
  { pct: 0.93, time: "Sun", concentrated: 16, distracted: 12 },
];

function isOverGradient(xPct: number, yPct: number): boolean {
  const boundary = 0.90 - xPct * 0.55;
  return yPct < boundary;
}

// Above the diagonal wave = blue/concentrated zone; below = pink/distracted zone
function isConcentratedZone(xPct: number, yPct: number): boolean {
  return yPct < 0.55 - xPct * 0.35;
}

const ICON_FOCUS = "https://www.figma.com/api/mcp/asset/1ef9ac5b-f108-4b95-911c-5d0fc0ce3078";
const ICON_GAPS  = "https://www.figma.com/api/mcp/asset/6b3a5b4f-0ed6-4aa7-b0f4-510cfc43fe11";

// Blue/concentrated layer — Figma node 181:1678, rotated 180°
const BLUE_SVG = `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display:block" viewBox="0 0 1205 571.263" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#fb0)">
<mask id="mb0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1205" height="572">
<path fill-rule="evenodd" clip-rule="evenodd" d="M588.141 250.563C896.828 228.782 1115.63 85.9739 1205 0V571.263H0V478.374C81.4636 405.809 282.133 272.155 588.141 250.563Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mb0)">
<g filter="url(#fb1)"><ellipse cx="144.022" cy="87.6908" rx="144.022" ry="87.6908" transform="matrix(0.942785 -0.3334 0.501003 0.865445 -22.2607 366.057)" fill="#48B0FF"/></g>
<g filter="url(#fb2)"><ellipse cx="116.294" cy="87.6908" rx="116.294" ry="87.6908" transform="matrix(0.942785 -0.3334 0.501003 0.865445 -129.703 420.235)" fill="#4FEAFF"/></g>
<g filter="url(#fb3)"><ellipse cx="101.525" cy="87.6908" rx="101.525" ry="87.6908" transform="matrix(0.942785 -0.3334 0.501003 0.865445 97.5 343.794)" fill="#4FEAFF"/></g>
<g filter="url(#fb4)"><ellipse cx="234.395" cy="235.577" rx="234.395" ry="235.577" transform="matrix(0.971451 0.237242 -0.000294861 1 263.85 -63.4079)" fill="#48B0FF"/></g>
<g filter="url(#fb5)"><ellipse cx="142.538" cy="132.382" rx="142.538" ry="132.382" transform="matrix(0.942785 -0.3334 0.501003 0.865445 586.587 178.609)" fill="#48B0FF"/></g>
<g filter="url(#fb6)"><ellipse cx="224.413" cy="135.457" rx="224.413" ry="135.457" transform="matrix(0.942785 -0.3334 0.501003 0.865445 539.214 71.57)" fill="#4FEAFF"/></g>
<g filter="url(#fb7)"><ellipse cx="135.624" cy="133.915" rx="135.624" ry="133.915" transform="matrix(0.942785 -0.3334 0.501003 0.865445 747.087 45.1085)" fill="#48B0FF"/></g>
<g filter="url(#fb8)"><ellipse cx="121.132" cy="131.785" rx="121.132" ry="131.785" transform="matrix(0.942785 -0.3334 0.501003 0.865445 894.847 3.02183)" fill="#4FEAFF"/></g>
</g>
</g>
<defs>
<filter id="fb0" x="6" y="6" width="1193" height="540.594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feTurbulence type="fractalNoise" baseFrequency="0.999 0.999" numOctaves="3" seed="6067"/><feDisplacementMap in="shape" scale="8" xChannelSelector="R" yChannelSelector="G" result="d" width="100%" height="100%"/><feMerge><feMergeNode in="d"/></feMerge></filter>
<filter id="fb1" x="-35.3" y="254.11" width="385.5" height="279.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb2" x="-144.28" y="322.11" width="336.29" height="270.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb3" x="81.81" y="252.72" width="310.69" height="266.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb4" x="213.78" y="-64.33" width="555.41" height="584.21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb5" x="587.4" y="71.59" width="399.78" height="348.13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb6" x="546.4" y="-75.11" width="544.5" height="378.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb7" x="747.62" y="-58.65" width="388.85" height="348.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fb8" x="893.14" y="-94.34" width="363.87" height="342.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
</defs>
</svg>`;

// Pink/distracted layer — Figma node 181:1688, rotated 180°
const PINK_SVG = `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display:block" viewBox="0 0 1225.33 598.177" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#fp0)">
<mask id="mp0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1226" height="599">
<path d="M0 0H1225.33V82.0518C1125.94 162.527 907.078 313.797 598.305 336.868C292.21 359.74 91.4838 501.312 0 598.177V0Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mp0)">
<g filter="url(#fp1)"><ellipse cx="146.831" cy="83.4477" rx="146.831" ry="83.4477" transform="matrix(0.978579 -0.20587 0.339053 0.940767 68.4141 426.312)" fill="#FF5E79"/></g>
<g filter="url(#fp2)"><ellipse cx="120.013" cy="118.24" rx="120.013" ry="118.24" transform="matrix(0.997813 0.0661029 0.0887782 0.996051 -43.0605 355.777)" fill="#FF5E79"/></g>
<g filter="url(#fp3)"><ellipse cx="121.605" cy="113.105" rx="121.605" ry="113.105" transform="matrix(0.876254 0.48185 -0.317284 0.948331 160.33 257.539)" fill="#FF5E79"/></g>
<g filter="url(#fp4)"><path d="M711.392 370.712C712.185 460.322 683.625 525.53 575.861 548.201C468.097 570.872 352.966 512.195 318.709 417.143C284.452 322.091 366.397 203.501 474.161 180.83C581.926 158.159 710.438 262.864 711.392 370.712Z" fill="#FF5E7A"/></g>
<g filter="url(#fp5)"><ellipse cx="184.514" cy="125.976" rx="184.514" ry="125.976" transform="matrix(0.978579 -0.20587 0.339053 0.940767 589.701 199.039)" fill="#FF5E79"/></g>
<g filter="url(#fp6)"><ellipse cx="57.8458" cy="54.5497" rx="57.8458" ry="54.5497" transform="matrix(0.978579 -0.20587 0.339053 0.940767 575.677 57.4038)" fill="#FFCE66"/></g>
<g filter="url(#fp7)"><ellipse cx="145.211" cy="143.473" rx="145.211" ry="143.473" transform="matrix(0.923422 0.383787 -0.217476 0.976066 882.691 35.1058)" fill="#FFCE66"/></g>
<g filter="url(#fp8)"><ellipse cx="168.925" cy="175.577" rx="168.925" ry="175.577" transform="matrix(0.996231 0.0867383 0.0694573 0.997585 973.032 21.683)" fill="#FF5E79"/></g>
</g>
</g>
<defs>
<filter id="fp0" x="0" y="15.71" width="1225.33" height="582.46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feTurbulence type="fractalNoise" baseFrequency="0.999 0.999" numOctaves="3" seed="6067"/><feDisplacementMap in="shape" scale="40" xChannelSelector="R" yChannelSelector="G" result="d" width="100%" height="100%"/><feMerge><feMergeNode in="d"/></feMerge></filter>
<filter id="fp1" x="43.92" y="340.44" width="392.95" height="268.29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp2" x="-83.03" y="313.44" width="340.43" height="336.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp3" x="68.53" y="251.15" width="324.94" height="344.49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp4" x="260.82" y="127.71" width="500.59" height="475.36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp5" x="577.39" y="105.08" width="471.17" height="348.97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp6" x="541.21" y="-5.88" width="219.14" height="205.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp7" x="797.88" y="30.11" width="375.41" height="401.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="25"/></filter>
<filter id="fp8" x="959.98" y="10.91" width="387.08" height="401.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="12.4"/></filter>
</defs>
</svg>`;

export default function OceanChart({ view }: OceanChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<{
    data: (typeof oceanTimeline)[0];
    x: number;
    y: number;
    xPct: number;
    yPct: number;
  } | null>(null);

  const data = view === "ocean" ? oceanTimeline : riverTimeline;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width;
      const yPct = y / rect.height;

      if (!isOverGradient(xPct, yPct)) {
        setHover(null);
        return;
      }

      let nearest = data[0];
      let minDist = Infinity;
      for (const dp of data) {
        const d = Math.abs(dp.pct - xPct);
        if (d < minDist) {
          minDist = d;
          nearest = dp;
        }
      }

      setHover({
        data: nearest,
        x: nearest.pct * rect.width,
        y,
        xPct: nearest.pct,
        yPct,
      });
    },
    [data]
  );

  const startLabel = view === "ocean" ? "9 AM" : "Mon";
  const endLabel = view === "ocean" ? "11 PM" : "Sun";

  return (
    <div
      ref={containerRef}
      className="bg-white border border-black rounded-[16px] w-full h-[635px] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHover(null)}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(253,249,249,0.6) 0 1px, transparent 1px 31.35px),
            repeating-linear-gradient(0deg, rgba(253,249,249,0.6) 0 1px, transparent 1px 32.35px)
          `,
          mixBlendMode: "multiply",
        }}
      />

      {/* Blue/concentrated layer — rotated 180°; extra width covers visual left edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: "106%",
          height: "90%",
          transform: "rotate(180deg)",
        }}
        dangerouslySetInnerHTML={{ __html: BLUE_SVG }}
      />

      {/* Pink/distracted layer — rotated 180°; slight extra width to match */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8.95%",
          left: 0,
          width: "103%",
          height: "91.05%",
          transform: "rotate(180deg)",
        }}
        dangerouslySetInnerHTML={{ __html: PINK_SVG }}
      />

      {/* Legend — "CONCENTRATED" and "DISTRACTED" per updated Figma */}
      <div
        className="absolute z-10 flex flex-col gap-3 items-end"
        style={{ top: "31px", right: "32px" }}
      >
        {/* Concentrated */}
        <div className="flex items-center h-[40px]">
          <div className="w-[33px] h-[40px] rounded-full bg-[#92d0ff] border-2 border-[#2e2f2c] mr-1.5 flex-shrink-0" />
          <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap">
            CONCENTRATED
          </span>
        </div>
        {/* Distracted */}
        <div className="flex items-center h-[40px]">
          <div className="flex items-center flex-shrink-0 mr-1.5">
            <div className="w-[33px] h-[40px] rounded-full bg-[#ff5e79] border-2 border-[#2e2f2c]" />
            <div className="-ml-px w-[33px] h-[40px] rounded-full bg-[#ffce66] border-2 border-[#2e2f2c]" />
          </div>
          <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-black leading-[1.571] whitespace-nowrap">
            DISTRACTED
          </span>
        </div>
      </div>

      {/* Time label: 9 AM — bottom-left per Figma (left:34, top:511) */}
      <div
        className="absolute z-10"
        style={{ left: "34px", top: "511px" }}
      >
        <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap opacity-90">
          {startLabel}
        </span>
      </div>

      {/* Time label: 11 PM — right side per Figma (left:1023, top:179) */}
      <div
        className="absolute z-10"
        style={{ left: "86.3%", top: "179px" }}
      >
        <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap opacity-90">
          {endLabel}
        </span>
      </div>

      {/* Hover — only shown over gradient area */}
      {hover && (() => {
        const concentrated = isConcentratedZone(hover.xPct, hover.yPct);
        const total = hover.data.concentrated + hover.data.distracted;
        const focusScore = concentrated
          ? Math.min(95, Math.round(hover.data.concentrated / total * 100) + 28)
          : Math.max(8, Math.round(hover.data.distracted / total * 100) - 5);
        const unconsciousGaps = concentrated
          ? Math.max(1, Math.round(hover.data.distracted / 7))
          : Math.max(4, Math.round(hover.data.distracted / 4));
        const consciousGaps = concentrated
          ? Math.max(1, Math.round(hover.data.concentrated / 15))
          : Math.max(2, Math.round(hover.data.concentrated / 8));

        // Find next time label
        const allData = view === "ocean" ? oceanTimeline : riverTimeline;
        const idx = allData.findIndex((d) => d.pct === hover.data.pct);
        const nextTime = allData[Math.min(idx + 1, allData.length - 1)].time;

        const cardW = 358;
        const containerW = containerRef.current?.clientWidth || 1000;
        const containerH = containerRef.current?.clientHeight || 635;
        const cardLeft = hover.x + 24 + cardW > containerW
          ? hover.x - cardW - 12
          : hover.x + 24;
        const cardTop = Math.max(16, Math.min(hover.y - 60, containerH - 180));

        return (
          <>
            {/* Vertical scrubber line */}
            <div
              className="absolute top-0 bottom-0 w-px pointer-events-none z-20"
              style={{
                left: `${hover.x}px`,
                background: "linear-gradient(to bottom, rgba(46,47,44,0) 0%, rgba(46,47,44,0.2) 10%, rgba(46,47,44,0.2) 90%, rgba(46,47,44,0) 100%)",
              }}
            />
            {/* Dot on the line */}
            <div
              className="absolute w-[14px] h-[14px] rounded-full bg-white border-2 border-[#2e2f2c] pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_3px_rgba(255,255,255,0.6)]"
              style={{ left: `${hover.x}px`, top: `${hover.y}px` }}
            />
            {/* Card */}
            <div
              className="absolute z-30 pointer-events-none"
              style={{ left: `${cardLeft}px`, top: `${cardTop}px` }}
            >
              <div className="bg-white border-2 border-[#2e2f2c] rounded-[24px] shadow-[0px_4px_0px_0px_black] px-4 py-4 w-[358px]">
                {/* Time range */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667]">{hover.data.time}</span>
                  <div className="w-[6px] h-[6px] rounded-full bg-[#9f8205] flex-shrink-0" />
                  <span className="text-[12px] font-bold text-[#9f8205] leading-[1.667]">{nextTime}</span>
                </div>
                {/* Title */}
                <p className="text-[24px] font-extrabold text-[#2e2f2c] leading-tight mb-3">
                  Likely To Be: {concentrated ? "Concentrated" : "Distracted"}
                </p>
                {/* Stats */}
                <div className="flex flex-col gap-[5px]">
                  <div className="flex items-center gap-2 h-[17px]">
                    <img alt="" src={ICON_FOCUS} className="w-[10px] h-[8.35px] object-contain flex-shrink-0" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      Average Focus Score: {focusScore}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 h-[17px]">
                    <img alt="" src={ICON_GAPS} className="w-[10px] h-[10px] object-contain flex-shrink-0" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      Average {unconsciousGaps} Unconscious Gap{unconsciousGaps !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 h-[17px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#abacab] flex-shrink-0" />
                    <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                      Average {consciousGaps} Conscious Gap{consciousGaps !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })()}

    </div>
  );
}
