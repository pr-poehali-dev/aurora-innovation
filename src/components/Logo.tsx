export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="16" fill="url(#logoGrad)" />
      <text x="20" y="26" textAnchor="middle" fontSize="16" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">П</text>
      <text x="44" y="27" fontSize="15" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">ПрофПроба</text>
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
  );
};
