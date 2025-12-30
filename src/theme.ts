export const themes = {
  rockBlue: {
    heroBg: '#012D79',
    ctaBannerBg: '#012D79',
    ctaBannerAltBg: '#E3EDFF',
    contactBg: '#012D79',
  },
  slateMist: {
    heroBg: '#0F172A',
    ctaBannerBg: '#111827',
    ctaBannerAltBg: '#E8EEF8',
    contactBg: '#0F172A',
  },
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];

export const activeThemeName: ThemeName = 'rockBlue';
export const theme: Theme = themes[activeThemeName];

export const getTheme = (name: ThemeName = activeThemeName): Theme => themes[name];
