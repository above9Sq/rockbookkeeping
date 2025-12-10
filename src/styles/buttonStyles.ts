// src/styles/buttonStyles.ts

// Shared motion (modern micro-zoom)
const btnMotion = `
  transition-transform duration-150 ease-out
  hover:scale-[1.02]
  active:scale-[0.98]
`;

// Shared hero button base (used in hero + any big primary CTA)
const btnHeroBase = `
  uppercase
  inline-flex items-center justify-center gap-x-3
  py-3.5 sm:py-4 px-5 sm:px-7
  text-[15px] sm:text-[18px]
  font-semibold rounded-lg tracking-wide
  whitespace-nowrap
  disabled:opacity-50 disabled:pointer-events-none
  focus:outline-hidden focus-visible:ring-2
  ${btnMotion}
`;

// Primary hero button - white on dark background
export const btnHeroPrimary = `
  ${btnHeroBase}
  w-full
  bg-white text-[#1F2937]
  hover:bg-gray-100
  focus-visible:ring-white/70
`;

// Secondary hero button - dark on dark background
export const btnHeroSecondary = `
  ${btnHeroBase}
  w-full
  bg-[#23335A] text-white
  hover:bg-[#1b2746]
  focus-visible:ring-white/70
`;

// Base shell for non-hero CTAs
const btnBaseShell = `
  uppercase
  inline-flex items-center justify-center gap-x-2
  py-2.5
  text-base font-semibold rounded-lg
  whitespace-nowrap
  disabled:opacity-50 disabled:pointer-events-none
  focus-visible:ring-2
  ${btnMotion}
`;

// Solid dark button shell
export const btnSolidDarkShell = `
  ${btnBaseShell}
  border border-transparent
  bg-[#23335A] text-white
  hover:bg-[#1b2746]
  focus-visible:ring-[#23335A]/60
`;

// Outline dark button shell
export const btnOutlineDarkShell = `
  ${btnBaseShell}
  border border-[#23335A]
  bg-transparent text-[#23335A]
  hover:bg-gray-100 hover:text-[#23335A]
  focus:outline-hidden focus-visible:ring-[#23335A]/40
`;
