export type HeroCta =
  | { kind: 'cal'; label: string; class?: string; size?: 'md' | 'lg' }
  | { kind: 'modal'; label: string; class?: string; size?: 'md' | 'lg' };

export type HeroImage = {
  src: any;
  alt: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'auto' | 'low';
};

export type HeroProps = {
  headline: string;
  subheadline?: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  image: HeroImage;
  showSignature?: boolean;
  bgColor?: string;
};
