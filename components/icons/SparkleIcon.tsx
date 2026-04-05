export default function SparkleIcon({ className = "w-[15px] h-[15px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 0L4.3 2.7L7 3.5L4.3 4.3L3.5 7L2.7 4.3L0 3.5L2.7 2.7L3.5 0Z" fill="#9f8205"/>
      <path d="M10 5L10.8 7.7L13.5 8.5L10.8 9.3L10 12L9.2 9.3L6.5 8.5L9.2 7.7L10 5Z" fill="#9f8205" opacity="0.7"/>
      <path d="M4 9L4.5 10.5L6 11L4.5 11.5L4 13L3.5 11.5L2 11L3.5 10.5L4 9Z" fill="#9f8205" opacity="0.5"/>
    </svg>
  );
}
