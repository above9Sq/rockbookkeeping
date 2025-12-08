// src/styles/buttonStyles.ts

// Shared hero button base (used in the hero + any big primary CTA)
const btnHeroBase = `
  uppercase
  inline-flex items-center justify-center gap-x-3
  py-3.5 sm:py-4 px-5 sm:px-7
  text-[15px] sm:text-[18px]
  font-semibold rounded-lg tracking-wide
  whitespace-nowrap
  disabled:opacity-50 disabled:pointer-events-none
  focus:outline-hidden focus-visible:ring-2
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

// Base for non-hero buttons (section CTAs, etc.)
const btnBaseShell = `
  uppercase
  inline-flex items-center justify-center gap-x-2
  py-2.5
  text-base font-semibold rounded-lg
  whitespace-nowrap
  disabled:opacity-50 disabled:pointer-events-none
  focus-visible:ring-2
`;

// Solid dark button shell (used by both Cal + CTA when "solid")
export const btnSolidDarkShell = `
  ${btnBaseShell}
  border border-transparent
  bg-[#23335A] text-white
  hover:bg-[#1b2746]
  focus-visible:ring-[#23335A]/60
`;

// Outline dark button shell (used by both Cal + CTA when "outline")
export const btnOutlineDarkShell = `
  ${btnBaseShell}
  border border-[#23335A]
  bg-transparent text-[#23335A]
  hover:bg-gray-100 hover:text-[#23335A]
  focus:outline-hidden focus-visible:ring-[#23335A]/40
`;
