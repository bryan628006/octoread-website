"use client";

import { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Per-concept data used by the hover popup                           */
/* ------------------------------------------------------------------ */

interface ConceptInfo {
  id: string;
  label: string;
  focusScore: number;
  articles: number;
  unconsciousGaps: number;
  consciousGaps: number;
  description: string;
}

const conceptData: ConceptInfo[] = [
  {
    id: "synaptic-plasticity",
    label: "Synaptic Plasticity (LTP)",
    focusScore: 72,
    articles: 2,
    unconsciousGaps: 8,
    consciousGaps: 4,
    description:
      "In Synaptic Plasticity, you had the most mental gaps on long-term potentiation mechanisms.",
  },
  {
    id: "ltp",
    label: "LTP",
    focusScore: 65,
    articles: 1,
    unconsciousGaps: 3,
    consciousGaps: 2,
    description:
      "In LTP, you had the most mental gaps on calcium signaling pathways.",
  },
  {
    id: "stdp",
    label: "STDP",
    focusScore: 58,
    articles: 1,
    unconsciousGaps: 5,
    consciousGaps: 3,
    description:
      "In STDP, you had the most mental gaps on spike-timing dependent plasticity windows.",
  },
  {
    id: "bdnf",
    label: "BDNF",
    focusScore: 70,
    articles: 1,
    unconsciousGaps: 4,
    consciousGaps: 2,
    description:
      "In BDNF, you had the most mental gaps on brain-derived neurotrophic factor expression.",
  },
  {
    id: "gene-expression",
    label: "Gene Expression",
    focusScore: 62,
    articles: 2,
    unconsciousGaps: 6,
    consciousGaps: 3,
    description:
      "In Gene Expression, you had the most mental gaps on transcription factor regulation.",
  },
  {
    id: "synapses",
    label: "Synapses",
    focusScore: 75,
    articles: 1,
    unconsciousGaps: 2,
    consciousGaps: 1,
    description:
      "In Synapses, you had the most mental gaps on synaptic vesicle cycling.",
  },
  {
    id: "metaplasticity",
    label: "Metaplasticity",
    focusScore: 55,
    articles: 2,
    unconsciousGaps: 7,
    consciousGaps: 4,
    description:
      "In Metaplasticity, you had the most mental gaps on BCM theory and threshold modulation.",
  },
  {
    id: "diaschisis",
    label: "Diaschisis",
    focusScore: 60,
    articles: 1,
    unconsciousGaps: 4,
    consciousGaps: 2,
    description:
      "In Diaschisis, you had the most mental gaps on remote functional depression after lesions.",
  },
  {
    id: "snri",
    label: "SNRI",
    focusScore: 68,
    articles: 1,
    unconsciousGaps: 3,
    consciousGaps: 2,
    description:
      "In SNRI, you had the most mental gaps on serotonin-norepinephrine reuptake inhibition.",
  },
];

/* ------------------------------------------------------------------ */
/*  Blob layer definitions for Neural Plasticity concept               */
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
  // SNRI – very large blue, background
  { cx: 612, cy: 389, rx: 90, ry: 94, color: "#4FEAFF", blur: 32, rotation: -5 },
  // metaplasticity – large cyan
  { cx: 743, cy: 241, rx: 82, ry: 86, color: "#33D4FF", blur: 30, rotation: 5 },
  // Synaptic Plasticity – large pink/red
  { cx: 175, cy: 155, rx: 115, ry: 123, color: "#FF5E79", blur: 34, rotation: -6 },
  // Synaptic Plasticity – inner magenta core
  { cx: 155, cy: 130, rx: 70, ry: 75, color: "#FF8FA3", blur: 23, rotation: 8 },
  // Gene Expression – orange/warm
  { cx: 596, cy: 250, rx: 66, ry: 67, color: "#FFCE66", blur: 21, rotation: 3 },
  // metaplasticity – inner blue accent
  { cx: 730, cy: 235, rx: 55, ry: 58, color: "#2E96FF", blur: 18, rotation: -6 },
  // BDNF – blue/teal
  { cx: 448, cy: 365, rx: 56, ry: 56, color: "#48B0FF", blur: 21, rotation: 4 },
  // diaschisis – orange/warm
  { cx: 682, cy: 340, rx: 56, ry: 58, color: "#FFCE66", blur: 21, rotation: -3 },
  // STDP – medium orange
  { cx: 410, cy: 290, rx: 48, ry: 48, color: "#FFCE66", blur: 18, rotation: -5 },
  // synapses – small warm
  { cx: 695, cy: 170, rx: 30, ry: 30, color: "#FFCE66", blur: 14, rotation: -8 },
  // LTP – small near pink blob
  { cx: 280, cy: 280, rx: 22, ry: 22, color: "#FFCE66", blur: 12 },
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
  { text: "Synaptic\nPlasticity\n(LTP)", x: 170, y: 130, rotation: -28 },
  { text: "LTP", x: 280, y: 278 },
  { text: "STDP", x: 410, y: 288 },
  { text: "BDNF", x: 448, y: 363 },
  { text: "Gene Expression", x: 596, y: 248 },
  { text: "synapses", x: 695, y: 165, rotation: -25 },
  { text: "metaplasticity", x: 743, y: 240 },
  { text: "diaschisis", x: 682, y: 338 },
  { text: "SNRI", x: 612, y: 388 },
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
  // Synaptic Plasticity → LTP
  { x1: 227, y1: 216, x2: 267, y2: 263 },
  // LTP → STDP
  { x1: 300, y1: 280, x2: 370, y2: 286 },
  // LTP → BDNF
  { x1: 298, y1: 287, x2: 408, y2: 344 },
  // STDP → Gene Expression
  { x1: 449, y1: 282, x2: 542, y2: 262 },
  // Gene Expression → synapses
  { x1: 639, y1: 215, x2: 676, y2: 186 },
  // Gene Expression → metaplasticity
  { x1: 651, y1: 247, x2: 678, y2: 245 },
  // BDNF → SNRI
  { x1: 492, y1: 372, x2: 543, y2: 379 },
];

/* ------------------------------------------------------------------ */
/*  Hover zones – invisible interactive areas over each concept blob   */
/* ------------------------------------------------------------------ */

const hoverZones: {
  conceptId: string;
  cx: number;
  cy: number;
  r: number;
}[] = [
  { conceptId: "synaptic-plasticity", cx: 175, cy: 155, r: 110 },
  { conceptId: "ltp", cx: 280, cy: 280, r: 30 },
  { conceptId: "stdp", cx: 410, cy: 290, r: 50 },
  { conceptId: "bdnf", cx: 448, cy: 365, r: 55 },
  { conceptId: "gene-expression", cx: 596, cy: 250, r: 65 },
  { conceptId: "synapses", cx: 695, cy: 170, r: 35 },
  { conceptId: "metaplasticity", cx: 743, cy: 241, r: 80 },
  { conceptId: "diaschisis", cx: 682, cy: 340, r: 55 },
  { conceptId: "snri", cx: 612, cy: 389, r: 85 },
];

/* ------------------------------------------------------------------ */
/*  Popup card component                                               */
/* ------------------------------------------------------------------ */

function ConceptPopup({ concept }: { concept: ConceptInfo }) {
  return (
    <div className="bg-white border-2 border-black rounded-[24px] shadow-[2px_2px_0px_0px_black] px-4 py-4 w-[326px]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
          BIOLOGY
        </span>
        <div className="w-[6px] h-[6px] rounded-full bg-[#ff5e79] flex-shrink-0" />
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
          CONCEPT
        </span>
        <div className="w-[6px] h-[6px] rounded-full bg-[#ff5e79] flex-shrink-0" />
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667] uppercase">
          {concept.label}
        </span>
      </div>

      {/* Title */}
      <p className="text-[24px] font-extrabold text-[#2e2f2c] leading-tight mb-3">
        Concept: {concept.label}
      </p>

      {/* Stats */}
      <div className="flex flex-col gap-[5px] mb-3">
        <div className="flex items-center gap-2 h-[17px]">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" className="flex-shrink-0">
            <rect width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
            <rect x="5.5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
            <rect y="5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
            <rect x="5.5" y="5" width="4" height="3.5" rx="0.5" fill="rgba(46,47,44,0.4)" />
          </svg>
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Average Focus Score: {concept.focusScore}%
          </span>
        </div>
        <div className="flex items-center gap-2 h-[17px]">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" className="flex-shrink-0">
            <rect x="0.5" y="0.5" width="9" height="8" rx="1" stroke="rgba(46,47,44,0.4)" strokeWidth="1" />
            <line x1="3" y1="3.5" x2="7" y2="3.5" stroke="rgba(46,47,44,0.4)" strokeWidth="0.8" />
            <line x1="3" y1="5.5" x2="6" y2="5.5" stroke="rgba(46,47,44,0.4)" strokeWidth="0.8" />
          </svg>
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Total Articles: {concept.articles}
          </span>
        </div>
        <div className="flex items-center gap-2 h-[17px]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
            <circle cx="5" cy="5" r="4" stroke="rgba(46,47,44,0.4)" strokeWidth="1" />
            <circle cx="5" cy="5" r="1.5" fill="rgba(46,47,44,0.4)" />
          </svg>
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Total Unconscious Gaps: {concept.unconsciousGaps}
          </span>
        </div>
        <div className="flex items-center gap-2 h-[17px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#abacab] flex-shrink-0" />
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Total Conscious Gaps: {concept.consciousGaps}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] font-semibold text-[#2e2f2c] leading-[1.667] mb-3">
        {concept.description}
      </p>

      {/* See Related Articles button */}
      <button className="bg-[#92d0ff] border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] h-[35px] flex items-center cursor-pointer">
        <span className="text-[14px] font-bold text-[#2e2f2c] leading-[1.571]">
          See Related Articles
        </span>
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ConceptRiverChart                                                  */
/* ------------------------------------------------------------------ */

export default function ConceptRiverChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredConcept = hoveredId
    ? conceptData.find((c) => c.id === hoveredId) ?? null
    : null;

  const hoveredZone = hoveredId
    ? hoverZones.find((z) => z.conceptId === hoveredId) ?? null
    : null;

  /* Position the popup: prefer right of blob, fall back left if overflowing */
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
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
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

      {/* Invisible hover zones over each concept blob */}
      {hoverZones.map((zone) => (
        <div
          key={zone.conceptId}
          className="absolute rounded-full z-[3] cursor-pointer"
          style={{
            left: `${zone.cx - zone.r}px`,
            top: `${zone.cy - zone.r}px`,
            width: `${zone.r * 2}px`,
            height: `${zone.r * 2}px`,
          }}
          onMouseEnter={() => setHoveredId(zone.conceptId)}
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

      {/* Dynamic hover popup card */}
      {hoveredConcept && (
        <div
          className="absolute z-20 pointer-events-none transition-all duration-150 ease-out"
          style={getPopupStyle()}
        >
          <ConceptPopup concept={hoveredConcept} />
        </div>
      )}
    </div>
  );
}
