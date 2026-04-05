"use client";

import { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Per-topic data used by the hover popup                             */
/* ------------------------------------------------------------------ */

interface TopicInfo {
  id: string;
  label: string;
  focusScore: number;
  unconsciousGaps: string;
  consciousGaps: string;
  description: string;
}

const topicData: TopicInfo[] = [
  {
    id: "critical-periods",
    label: "Critical Periods",
    focusScore: 42,
    unconsciousGaps: "Sensitive Periods, Imprinting",
    consciousGaps: "Synaptic Pruning",
    description:
      "One of the major topics you don't know about in this article-- read into sensitive periods and synaptic pruning.",
  },
  {
    id: "axonal-sprouting",
    label: "Axonal Sprouting",
    focusScore: 30,
    unconsciousGaps: "Collateral Sprouting",
    consciousGaps: "Regenerative Sprouting",
    description:
      "One of the major topics you don't know about in this article-- read into collateral sprouting and regenerative sprouting.",
  },
  {
    id: "hbl",
    label: "HBL",
    focusScore: 55,
    unconsciousGaps: "Hebbian Learning Rules",
    consciousGaps: "Correlation-Based Plasticity",
    description:
      "You had moderate gaps in Hebbian learning rules and correlation-based plasticity mechanisms.",
  },
  {
    id: "retrieval",
    label: "Retrieval",
    focusScore: 35,
    unconsciousGaps: "Memory Reconsolidation",
    consciousGaps: "Retrieval Practice",
    description:
      "You struggled with memory reconsolidation processes and retrieval practice mechanisms.",
  },
  {
    id: "stdp",
    label: "STDP",
    focusScore: 40,
    unconsciousGaps: "Spike-Timing Windows",
    consciousGaps: "Pre-Post Synaptic Pairing",
    description:
      "You had gaps in spike-timing dependent plasticity windows and pre-post synaptic pairing protocols.",
  },
  {
    id: "learning",
    label: "Learning",
    focusScore: 45,
    unconsciousGaps: "Associative Learning",
    consciousGaps: "Procedural Memory",
    description:
      "You had gaps in associative learning mechanisms and procedural memory formation.",
  },
  {
    id: "processing-speed",
    label: "Processing Speed",
    focusScore: 48,
    unconsciousGaps: "Myelination Deficits",
    consciousGaps: "White Matter Integrity",
    description:
      "You had moderate gaps in myelination deficits and white matter integrity effects on cognition.",
  },
  {
    id: "transfer",
    label: "Transfer",
    focusScore: 50,
    unconsciousGaps: "Far Transfer",
    consciousGaps: "Near Transfer",
    description:
      "You had gaps in far transfer learning and near transfer applications in cognitive training.",
  },
  {
    id: "load",
    label: "Load",
    focusScore: 60,
    unconsciousGaps: "Cognitive Load Theory",
    consciousGaps: "Intrinsic Load",
    description:
      "You had minor gaps in cognitive load theory and intrinsic load management.",
  },
  {
    id: "cortical-remapping",
    label: "Cortical Remapping",
    focusScore: 52,
    unconsciousGaps: "Somatosensory Cortex",
    consciousGaps: "Cross-Modal Plasticity",
    description:
      "You had gaps in somatosensory cortex reorganization and cross-modal plasticity.",
  },
  {
    id: "salience-network",
    label: "Salience Network",
    focusScore: 44,
    unconsciousGaps: "Anterior Insula",
    consciousGaps: "ACC Connectivity",
    description:
      "You had gaps in anterior insula function and ACC connectivity within the salience network.",
  },
  {
    id: "wm-capacity",
    label: "WM Capacity",
    focusScore: 58,
    unconsciousGaps: "Chunking Strategies",
    consciousGaps: "Attentional Control",
    description:
      "You had moderate gaps in chunking strategies and attentional control mechanisms for working memory.",
  },
];

/* ------------------------------------------------------------------ */
/*  Blob layer definitions                                             */
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
  // cortical remapping – very large cyan bg
  { cx: 700, cy: 290, rx: 100, ry: 105, color: "#33D4FF", blur: 32, rotation: 5 },
  // cortical remapping – inner blue
  { cx: 690, cy: 285, rx: 65, ry: 68, color: "#2E96FF", blur: 20, rotation: -4 },
  // Critical Periods – large pink
  { cx: 180, cy: 160, rx: 85, ry: 90, color: "#FF5E79", blur: 30, rotation: -6 },
  // Critical Periods – inner magenta
  { cx: 170, cy: 145, rx: 55, ry: 58, color: "#FF8FA3", blur: 20, rotation: 8 },
  // learning – large pink bottom-left
  { cx: 120, cy: 430, rx: 90, ry: 95, color: "#FF5E79", blur: 30, rotation: 12 },
  // learning – inner
  { cx: 110, cy: 420, rx: 55, ry: 58, color: "#FF8FA3", blur: 20, rotation: -5 },
  // axonal sprouting – medium pink
  { cx: 310, cy: 175, rx: 60, ry: 62, color: "#FF8FA3", blur: 22, rotation: -3 },
  // retrieval – medium pink
  { cx: 250, cy: 295, rx: 55, ry: 58, color: "#FF5E79", blur: 22, rotation: 4 },
  // processing speed – medium orange
  { cx: 475, cy: 320, rx: 60, ry: 62, color: "#FFCE66", blur: 20, rotation: -5 },
  // STDP – medium pink
  { cx: 220, cy: 385, rx: 52, ry: 52, color: "#FF5E79", blur: 20, rotation: -8 },
  // wm capacity – medium blue
  { cx: 560, cy: 400, rx: 58, ry: 60, color: "#48B0FF", blur: 20, rotation: 4 },
  // salience network – medium warm
  { cx: 490, cy: 440, rx: 50, ry: 50, color: "#FFCE66", blur: 18, rotation: -3 },
  // transfer – small warm
  { cx: 350, cy: 440, rx: 38, ry: 38, color: "#FFCE66", blur: 16, rotation: -6 },
  // HBL – small warm
  { cx: 400, cy: 250, rx: 28, ry: 28, color: "#FFCE66", blur: 14 },
  // load – small orange
  { cx: 540, cy: 200, rx: 25, ry: 25, color: "#FFCE66", blur: 13, rotation: -8 },
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
  { text: "Critical\nPeriods", x: 180, y: 155, rotation: -35 },
  { text: "axonal\nsprouting", x: 310, y: 175, rotation: -15 },
  { text: "HBL", x: 400, y: 250 },
  { text: "retrieval", x: 250, y: 290, rotation: -25 },
  { text: "STDP", x: 220, y: 385 },
  { text: "learning", x: 120, y: 425 },
  { text: "processing\nspeed", x: 475, y: 318 },
  { text: "transfer", x: 350, y: 440, rotation: -20 },
  { text: "load", x: 540, y: 200 },
  { text: "cortical\nremapping", x: 700, y: 285 },
  { text: "salience\nnetwork", x: 490, y: 435 },
  { text: "wm\ncapacity", x: 560, y: 395 },
];

/* ------------------------------------------------------------------ */
/*  Connecting lines (edge-to-edge)                                    */
/* ------------------------------------------------------------------ */

const connectionLines: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}[] = [
  // Critical Periods → axonal sprouting
  { x1: 240, y1: 167, x2: 265, y2: 170 },
  // Critical Periods → retrieval
  { x1: 208, y1: 213, x2: 231, y2: 258 },
  // axonal sprouting → HBL
  { x1: 345, y1: 204, x2: 383, y2: 236 },
  // HBL → processing speed
  { x1: 416, y1: 265, x2: 442, y2: 289 },
  // retrieval → STDP
  { x1: 237, y1: 335, x2: 233, y2: 347 },
  // STDP → transfer
  { x1: 257, y1: 401, x2: 322, y2: 428 },
  // processing speed → load
  { x1: 497, y1: 280, x2: 530, y2: 218 },
  // processing speed → cortical remapping
  { x1: 520, y1: 314, x2: 631, y2: 299 },
  // transfer → salience network
  { x1: 380, y1: 440, x2: 452, y2: 440 },
  // wm capacity → cortical remapping
  { x1: 595, y1: 372, x2: 645, y2: 333 },
  // load → cortical remapping
  { x1: 557, y1: 210, x2: 639, y2: 256 },
];

/* ------------------------------------------------------------------ */
/*  Hover zones                                                        */
/* ------------------------------------------------------------------ */

const hoverZones: {
  topicId: string;
  cx: number;
  cy: number;
  r: number;
}[] = [
  { topicId: "critical-periods", cx: 180, cy: 160, r: 80 },
  { topicId: "axonal-sprouting", cx: 310, cy: 175, r: 55 },
  { topicId: "hbl", cx: 400, cy: 250, r: 30 },
  { topicId: "retrieval", cx: 250, cy: 295, r: 50 },
  { topicId: "stdp", cx: 220, cy: 385, r: 50 },
  { topicId: "learning", cx: 120, cy: 430, r: 75 },
  { topicId: "processing-speed", cx: 475, cy: 320, r: 55 },
  { topicId: "transfer", cx: 350, cy: 440, r: 38 },
  { topicId: "load", cx: 540, cy: 200, r: 28 },
  { topicId: "cortical-remapping", cx: 700, cy: 290, r: 85 },
  { topicId: "salience-network", cx: 490, cy: 440, r: 48 },
  { topicId: "wm-capacity", cx: 560, cy: 400, r: 55 },
];

/* ------------------------------------------------------------------ */
/*  Popup card component                                               */
/* ------------------------------------------------------------------ */

function TopicPopup({ topic }: { topic: TopicInfo }) {
  return (
    <div className="bg-white border-2 border-black rounded-[24px] shadow-[2px_2px_0px_0px_black] px-4 py-4 w-[326px]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
          BIOLOGY
        </span>
        <div className="w-[6px] h-[6px] rounded-full bg-[#ff5e79] flex-shrink-0" />
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
          NEURAL PLASTICITY
        </span>
        <div className="w-[6px] h-[6px] rounded-full bg-[#ff5e79] flex-shrink-0" />
        <span className="text-[12px] font-bold text-[#ff5e79] leading-[1.667]">
          ARTICLE
        </span>
      </div>

      {/* Title */}
      <p className="text-[24px] font-extrabold text-[#2e2f2c] leading-tight mb-3">
        Subtopic: {topic.label}
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
            Average Focus Score: {topic.focusScore}%
          </span>
        </div>
        <div className="flex items-center gap-2 h-[17px]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
            <circle cx="5" cy="5" r="4" stroke="rgba(46,47,44,0.4)" strokeWidth="1" />
            <circle cx="5" cy="5" r="1.5" fill="rgba(46,47,44,0.4)" />
          </svg>
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Unconscious Gaps: {topic.unconsciousGaps}
          </span>
        </div>
        <div className="flex items-center gap-2 h-[17px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#abacab] flex-shrink-0" />
          <span className="text-[12px] font-semibold text-[rgba(46,47,44,0.4)] leading-[1.667]">
            Conscious Gaps: {topic.consciousGaps}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] font-semibold text-[#2e2f2c] leading-[1.667] mb-3">
        {topic.description}
      </p>

      {/* Open full button */}
      <button className="bg-[#92d0ff] border-2 border-[#2e2f2c] rounded-full px-[17px] py-[9px] h-[35px] flex items-center cursor-pointer">
        <span className="text-[14px] font-bold text-[#2e2f2c] leading-[1.571]">
          Open full
        </span>
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ArticleRiverChart                                                  */
/* ------------------------------------------------------------------ */

export default function ArticleRiverChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredTopic = hoveredId
    ? topicData.find((t) => t.id === hoveredId) ?? null
    : null;

  const hoveredZone = hoveredId
    ? hoverZones.find((z) => z.topicId === hoveredId) ?? null
    : null;

  function getPopupStyle(): React.CSSProperties {
    if (!hoveredZone || !containerRef.current) return { display: "none" };
    const cW = containerRef.current.clientWidth;
    const cardW = 326;
    const cardH = 320;
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

      {/* Invisible hover zones */}
      {hoverZones.map((zone) => (
        <div
          key={zone.topicId}
          className="absolute rounded-full z-[3] cursor-pointer"
          style={{
            left: `${zone.cx - zone.r}px`,
            top: `${zone.cy - zone.r}px`,
            width: `${zone.r * 2}px`,
            height: `${zone.r * 2}px`,
          }}
          onMouseEnter={() => setHoveredId(zone.topicId)}
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

      {/* Dynamic hover popup */}
      {hoveredTopic && (
        <div
          className="absolute z-20 pointer-events-none transition-all duration-150 ease-out"
          style={getPopupStyle()}
        >
          <TopicPopup topic={hoveredTopic} />
        </div>
      )}
    </div>
  );
}
