// src/styles/buttonStyles.ts

type ButtonVariant = 'dark' | 'light' | 'outline' | 'outlineLight';
type ButtonSize = 'md' | 'hero';

// Shared motion (micro-zoom)
const motion = `
  transition-transform duration-150 ease-out
  hover:scale-[1.02]
  active:scale-[0.98]
`;

const base = `
  uppercase
  inline-flex items-center justify-center gap-x-2
  text-base font-semibold rounded-lg tracking-wide
  whitespace-nowrap
  disabled:opacity-50 disabled:pointer-events-none
  focus-visible:ring-2 focus:outline-hidden
  ${motion}
`;

const variantClasses: Record<ButtonVariant, string> = {
  dark: `
    border border-transparent
    bg-[#001B4B] text-white
    hover:bg-[#1b2746]
    focus-visible:ring-[#23335A]/60
  `,
  light: `
    border border-transparent
    bg-white text-[#1F2937]
    hover:bg-gray-100
    focus-visible:ring-white/70
  `,
  outline: `
    border border-[#23335A]
    bg-transparent text-[#23335A]
    hover:bg-gray-100 hover:text-[#23335A]
    focus-visible:ring-[#23335A]/40
  `,
  outlineLight: `
    border border-white
    bg-transparent text-white
    hover:bg-white/10
    focus-visible:ring-white/60
  `,
};

const paddingBySize = (size: ButtonSize, narrow: boolean) => {
  if (size === 'hero') return 'py-3.5 sm:py-4 px-5 sm:px-7 text-[15px] sm:text-[18px]';
  return narrow ? 'py-2.5 px-6 sm:px-8' : 'py-2.5 pl-12 pr-10 sm:pl-16 sm:pr-11';
};

const widthClass = (fullWidth: boolean, narrow: boolean) => {
  if (fullWidth) return 'w-full';
  return narrow ? 'w-full sm:w-fit' : 'w-full lg:w-fit';
};

export function buttonClasses({
  variant = 'dark',
  size = 'md',
  fullWidth = false,
  narrow = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  narrow?: boolean;
}) {
  const padding = paddingBySize(size, narrow);
  const width = widthClass(fullWidth || size === 'hero', narrow);

  return `${base} ${variantClasses[variant]} ${padding} ${width}`;
}

export type { ButtonVariant, ButtonSize };
