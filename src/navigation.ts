import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Services', href: '/#services' },
    { text: 'Pricing', href: '/#pricing' },
    { text: 'About', href: getPermalink('/about') },
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
  footNote: `&copy; ${new Date().getFullYear()} Rock Bookkeeping. Made with <span class="text-red-400">❤️</span> in Pittsburgh.<br class="sm:hidden"> All&nbsp;rights&nbsp;reserved.`,
};
