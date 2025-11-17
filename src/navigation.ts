import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { APP_BLOG } from 'astrowind:config';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Services', href: '/#services' },
    { text: 'Pricing', href: '/#pricing' },
    { text: 'About', href: getPermalink('/about') },
    ...(APP_BLOG?.isEnabled ? [{ text: 'Blog', href: getBlogPermalink() }] : []),
    { text: 'FAQ', href: '/#faq' },
  ],
  ctaLabel: 'Fix My Books Now',
  ctaModal: '#contact-modal',
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Services', href: '/#services' },
        { text: 'Pricing', href: '/#pricing' },
        { text: 'About', href: getPermalink('/about') },
        { text: 'FAQ', href: '/#faq' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Disclaimer', href: getPermalink('/disclaimer') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `&copy; ${new Date().getFullYear()} Rock Bookkeeping. All&nbsp;rights&nbsp;reserved. <br> Made with 💛 in Pittsburgh.`,
};
