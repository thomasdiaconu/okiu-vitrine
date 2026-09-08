export default function Glasses() {
  return (
    <svg viewBox="0 0 340 130" aria-hidden="true">
      <path className="temple" pathLength="1" d="M28 62 C18 58 10 50 4 40" />
      <path className="temple" pathLength="1" d="M312 62 C322 58 330 50 336 40" />
      <rect className="lens" pathLength="1" x="28" y="34" width="118" height="72" rx="30" />
      <rect className="lens" pathLength="1" x="194" y="34" width="118" height="72" rx="30" />
      <path pathLength="1" d="M146 62 C154 48 186 48 194 62" />
      <path pathLength="1" d="M52 54 C58 46 70 44 80 46" opacity=".55" />
      <path pathLength="1" d="M218 54 C224 46 236 44 246 46" opacity=".55" />
    </svg>
  );
}
