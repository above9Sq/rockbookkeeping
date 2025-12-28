import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { APP_BLOG } from 'astrowind:config';

export const headerData = {
  links: [
    { text: 'Services', href: '/#services' },
    { text: 'Pricing', href: '/#pricing' },
    { text: 'FAQ', href: '#faq' },
    { text: 'About', href: getPermalink('/about') },
    ...(APP_BLOG?.isEnabled ? [{ text: 'Blog', href: getBlogPermalink() }] : []),
    { text: 'Contact', href: '#contact' },
  ],
  ctaLabel: 'Fix My Books Now',
  ctaModal: '#contact-modal',
  phoneNumber: '412-256-8411',
  useTextJoshInHeader: true,
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Services', href: '/#services' },
        { text: 'Pricing', href: '/#pricing' },
        { text: 'FAQ', href: '#faq' },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Disclaimer', href: getPermalink('/disclaimer') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `&copy; ${new Date().getFullYear()} Rock Bookkeeping. All&nbsp;rights&nbsp;reserved. <br> Made with 💛 in Pittsburgh.`,
};
