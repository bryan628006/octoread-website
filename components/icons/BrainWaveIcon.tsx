export default function BrainWaveIcon({ className = "w-5 h-[16.7px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 13L3.5 8L5.5 11L8 4L10 9L12 6L14.5 12L16 7L18 13" stroke="#ff5e79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0 16H20" stroke="#ff5e79" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}
