"use client";

import { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Hover zones – invisible interactive areas over each topic blob     */
/* ------------------------------------------------------------------ */

const hoverZones: {
  id: string;
  cx: number;
  cy: number;
  r: number;
}[] = [
  { id: "neural-plasticity", cx: 157, cy: 147, r: 100 },
  { id: "dna", cx: 251, cy: 237, r: 60 },
  { id: "micro", cx: 346, cy: 188, r: 42 },
  { id: "genetics-top", cx: 522, cy: 98, r: 75 },
  { id: "rna", cx: 465, cy: 196, r: 60 },
  { id: "homeostasis", cx: 210, cy: 364, r: 70 },
  { id: "genetics-bottom", cx: 465, cy: 397, r: 60 },
  { id: "cell-theory", cx: 555, cy: 332, r: 95 },
  { id: "energy", cx: 702, cy: 139, r: 35 },
  { id: "evolution", cx: 817, cy: 209, r: 100 },
];

/* ------------------------------------------------------------------ */
/*  Blob layer definitions – ordered back-to-front for natural overlap */
/* ------------------------------------------------------------------ */

const blobLayers: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  color: string;
  blur: number;
  rotation?: number;
}[] = [
  // cell theory – large cyan, background
  { cx: 555, cy: 332, rx: 115, ry: 123, color: "#4FEAFF", blur: 31, rotation: -8 },
  // evolution – very large outer cyan
  { cx: 817, cy: 209, rx: 131, ry: 139, color: "#33D4FF", blur: 34, rotation: 5 },
  // neural plasticity – large pink/red
  { cx: 157, cy: 147, rx: 119, ry: 127, color: "#FF5E79", blur: 34, rotation: -6 },
  // neural plasticity – inner magenta core
  { cx: 137, cy: 123, rx: 74, ry: 78, color: "#FF8FA3", blur: 23, rotation: 8 },
  // genetics (top) – solid blue
  { cx: 522, cy: 98, rx: 82, ry: 86, color: "#2E96FF", blur: 26, rotation: 7 },
  // RNA – blue, slightly smaller
  { cx: 465, cy: 196, rx: 66, ry: 64, color: "#48B0FF", blur: 23, rotation: -3 },
  // evolution – inner blue accent
  { cx: 797, cy: 200, rx: 70, ry: 74, color: "#2E96FF", blur: 21, rotation: -8 },
  // homeostasis – cyan/teal
  { cx: 210, cy: 364, rx: 74, ry: 78, color: "#4FEAFF", blur: 26, rotation: 4 },
  // genetics (bottom) – orange/warm (unconscious)
  { cx: 465, cy: 397, rx: 66, ry: 70, color: "#FFCE66", blur: 21, rotation: -8 },
  // DNA – large orange, overlapping with neural plasticity
  { cx: 251, cy: 237, rx: 64, ry: 66, color: "#FFCE66", blur: 21, rotation: 3 },
  // Micro – small orange
  { cx: 346, cy: 188, rx: 41, ry: 41, color: "#FFCE66", blur: 18, rotation: -5 },
  // energy – small warm
  { cx: 702, cy: 139, rx: 33, ry: 34, color: "#FFCE66", blur: 15, rotation: -10 },
];

/* ------------------------------------------------------------------ */
/*  Topic labels                                                       */
/* ------------------------------------------------------------------ */

const topicLabels: {
  text: string;
  x: number;
  y: number;
  rotation?: number;
}[] = [
  { text: "neural\nplasticity", x: 145, y: 131 },
  { text: "DNA", x: 247, y: 233 },
  { text: "Micro", x: 346, y: 184 },
  { text: "genetics", x: 518, y: 90 },
  { text: "RNA", x: 461, y: 192 },
  { text: "homeostasis", x: 202, y: 360 },
  { text: "genetics", x: 461, y: 393 },
  { text: "cell theory", x: 543, y: 323, rotation: -40 },
  { text: "energy", x: 696, y: 133, rotation: -28 },
  { text: "evolution", x: 805, y: 209 },
];

/* ------------------------------------------------------------------ */
/*  Connecting lines between blob clusters                             */
/* ------------------------------------------------------------------ */

const connectionLines: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}[] = [
  // neural plasticity → Micro
  { x1: 230, y1: 163, x2: 312, y2: 181 },
  // neural plasticity → homeostasis
  { x1: 175, y1: 220, x2: 196, y2: 308 },
  // DNA → Micro
  { x1: 295, y1: 214, x2: 315, y2: 204 },
  // DNA → homeostasis
  { x1: 236, y1: 285, x2: 228, y2: 309 },
  // Micro → RNA
  { x1: 381, y1: 190, x2: 415, y2: 193 },
  // RNA → cell theory
  { x1: 493, y1: 238, x2: 514, y2: 269 },
  // genetics top → energy
  { x1: 580, y1: 111, x2: 675, y2: 133 },
  // energy → evolution
  { x1: 726, y1: 154, x2: 745, y2: 165 },
  // homeostasis → genetics bottom
  { x1: 268, y1: 371, x2: 415, y2: 391 },
  // cell theory → evolution
  { x1: 623, y1: 300, x2: 740, y2: 245 },
];

/* ------------------------------------------------------------------ */
/*  RiverChart                                                         */
/* ------------------------------------------------------------------ */

export default function RiverChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredZone = hoveredId
    ? hoverZones.find((z) => z.id === hoveredId) ?? null
    : null;

  function getPopupStyle(): React.CSSProperties {
    if (!hoveredZone || !containerRef.current) return { display: "none" };
    const cW = containerRef.current.clientWidth;
    const cardW = 326;
    const cardH = 340;
    let left = hoveredZone.cx + hoveredZone.r + 16;
    let top = hoveredZone.cy - 40;

    if (left + cardW > cW - 16) {
      left = hoveredZone.cx - hoveredZone.r - cardW - 16;
    }
    if (left < 16) left = 16;
    if (top + cardH > 540 - 16) top = 540 - cardH - 16;
    if (top < 16) top = 16;

    return { left: `${left}px`, top: `${top}px` };
  }

  return (
    <div
      ref={containerRef}
      className="bg-white border border-black rounded-[16px] w-full h-[540px] relative overflow-hidden"
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

      {/* Blob layers */}
      {blobLayers.map((blob, i) => (
        <div
          key={`blob-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${blob.cx - blob.rx}px`,
            top: `${blob.cy - blob.ry}px`,
            width: `${blob.rx * 2}px`,
            height: `${blob.ry * 2}px`,
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            transform: blob.rotation ? `rotate(${blob.rotation}deg)` : undefined,
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      >
        {connectionLines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(46,47,44,0.15)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Topic labels */}
      {topicLabels.map((label, i) => (
        <div
          key={`label-${i}`}
          className="absolute z-[2] text-[14px] font-bold text-white whitespace-pre-line text-center pointer-events-none leading-[1.571]"
          style={{
            left: `${label.x}px`,
            top: `${label.y}px`,
            transform: `translate(-50%, -50%)${label.rotation ? ` rotate(${label.rotation}deg)` : ""}`,
          }}
        >
          {label.text}
        </div>
      ))}

      {/* Invisible hover zones over each topic blob */}
      {hoverZones.map((zone) => (
        <div
          key={zone.id}
          className="absolute rounded-full z-[3] cursor-pointer"
          style={{
            left: `${zone.cx - zone.r}px`,
            top: `${zone.cy - zone.r}px`,
            width: `${zone.r * 2}px`,
            height: `${zone.r * 2}px`,
          }}
          onMouseEnter={() => setHoveredId(zone.id)}
          onMouseLeave={() => setHoveredId(null)}
        />
      ))}

      {/* Legend – top-right corner */}
      <div
        className="absolute z-10 flex flex-col gap-2 items-end"
        style={{ top: "28px", right: "30px" }}
      >
        {/* Unconscious Gap */}
        <div className="flex items-center h-[40px]">
          <div className="w-[33px] h-[40px] rounded-full bg-[#ff5e79] border-2 border-[#2e2f2c] flex-shrink-0" />
          <div className="-ml-px w-[33px] h-[40px] rounded-full bg-[#ffce66] border-2 border-[#2e2f2c] mr-1.5 flex-shrink-0" />
          <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap">
            UNCONSCIOUS GAP
          </span>
        </div>
        {/* Conscious Gap */}
        <div className="flex items-center h-[40px]">
          <div className="w-[33px] h-[40px] rounded-full bg-[#92d0ff] border-2 border-[#2e2f2c] mr-1.5 flex-shrink-0" />
          <span className="bg-white border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] text-[14px] font-bold text-[#2e2f2c] leading-[1.571] whitespace-nowrap">
            CONSCIOUS GAP
          </span>
        </div>
      </div>

      {/* Biology popup card – follows hovered blob */}
      {hoveredId && (
      <div
        className="absolute z-20 pointer-events-none transition-all duration-150 ease-out"
        style={getPopupStyle()}
      >
        <div className="bg-white border-2 border-black rounded-[24px] shadow-[2px_2px_0px_0px_black] px-4 py-4 w-[326px]">
          {/* Topic breadcrumb */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
              TOPIC
            </span>
            <div className="w-[6px] h-[6px] rounded-full bg-[#ff5e79] flex-shrink-0" />
            <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
              BIOLOGY
            </span>
          </div>

          {/* Title */}
          <p className="text-[24px] font-extrabold text-[#2e2f2c] leading-tight mb-3">
            Biology
          </p>

          {/* Stats */}
          <div className="flex flex-col gap-[5px] mb-3">
            <div className="flex items-center gap-2 h-[17px]">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                className="flex-shrink-0"
              >
                <rect width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
                <rect x="5.5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
                <rect y="5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
                <rect x="5.5" y="5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
              </svg>
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Average Focus Score: 65%
              </span>
            </div>
            <div className="flex items-center gap-2 h-[17px]">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                className="flex-shrink-0"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="9"
                  height="8"
                  rx="1"
                  stroke="rgba(46,47,44,0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="3"
                  y1="3.5"
                  x2="7"
                  y2="3.5"
                  stroke="rgba(46,47,44,0.4)"
                  strokeWidth="0.8"
                />
                <line
                  x1="3"
                  y1="5.5"
                  x2="6"
                  y2="5.5"
                  stroke="rgba(46,47,44,0.4)"
                  strokeWidth="0.8"
                />
              </svg>
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Total Articles: 18
              </span>
            </div>
            <div className="flex items-center gap-2 h-[17px]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="flex-shrink-0"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="4"
                  stroke="rgba(46,47,44,0.4)"
                  strokeWidth="1"
                />
                <circle cx="5" cy="5" r="1.5" fill="rgba(46,47,44,0.4)" />
              </svg>
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Total Unconscious Gaps: 34
              </span>
            </div>
            <div className="flex items-center gap-2 h-[17px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#abacab] flex-shrink-0" />
              <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
                Total Conscious Gaps: 19
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[12px] font-semibold text-[#2e2f2c] leading-[1.667] mb-3">
            In Biology, you{" "}
            <span className="font-bold">had the most</span> mental gaps in
            neural plasticity and child psychology.
          </p>

                  </div>
      </div>
      )}
    </div>
  );
}
