export type FAQItem = {
  question: string;
  paragraphs: string[];
};

export const faqs: FAQItem[] = [
  // 1) Remove shame immediately — biggest conversion driver
  {
    question: "I'm behind on my bookkeeping. Can you still help me?",
    paragraphs: [
      'Absolutely. Most clients come to me months behind — sometimes a year or more.',
      'Catch-up and cleanup work is completely normal. I bring everything up to date, reconcile every account, and deliver clean financials you can finally trust.',
    ],
  },

  // 2) Normalize embarrassment — psychologically critical
  {
    question: 'My books are a mess and I feel embarrassed. Is that normal?',
    paragraphs: [
      'Very normal — almost every new client feels this way before reaching out.',
      "You're busy running the business. My job is to quietly fix the books so you can have clarity, confidence, and zero stress about your numbers.",
    ],
  },

  // 3) Address fees early — reduces anxiety & builds trust
  {
    question: 'What are the fees?',
    paragraphs: [
      'We use flat monthly pricing.',
      "We'll talk through your business needs and recommend the right plan.",
      'Most owners save $10k/year and 15 hours/month. Buy back your time and peace of mind.',
    ],
  },

  // 4) Explain how the service works — clarity builds confidence
  {
    question: 'How does monthly bookkeeping work?',
    paragraphs: [
      'Each month we:',
      '1. Pull in your bank and credit card transactions',
      '2. Categorize everything with smart rules + manual review',
      '3. Reconcile all accounts to the penny',
      '4. Deliver clean Profit & Loss, Balance Sheet, and Cash Flow reports',
      'You get financial clarity without lifting a finger.',
    ],
  },

  // 5) Onboarding & speed — momentum builder
  {
    question: 'How fast can we start and what does onboarding look like?',
    paragraphs: [
      'Onboarding is simple and usually completed in a day.',
      'We connect your bank feeds, review your chart of accounts, and clean up anything that’s out of place.',
      "If you're behind, cleanup begins immediately so you can get accurate numbers fast.",
    ],
  },

  // 6) Security reassurance — mandatory for financial services
  {
    question: 'Is my financial information secure?',
    paragraphs: [
      'Yes — all work is done inside QuickBooks Online using bank-level encryption.',
      'We never store your data locally. Statements are uploaded securely or synced directly through QBO.',
    ],
  },

  // 7) Boundaries around tax prep — avoids misaligned expectations
  {
    question: 'What if I need tax preparation?',
    paragraphs: [
      'We don’t file taxes, but we make your CPA’s job easy.',
      'You’ll receive clean, organized, audit-ready books delivered on time.',
      'We can also work directly with your tax pro to answer questions.',
    ],
  },

  // 8) Sales tax question — small % of visitors, but important to clarify
  {
    question: 'Do you handle sales tax?',
    paragraphs: [
      'We don’t file sales tax returns.',
      'But we track and categorize all sales tax collected and paid so your CPA can file accurately and on time.',
    ],
  },

  // 9) Accuracy assurance — major trust builder
  {
    question: 'How do I know my books will be accurate?',
    paragraphs: [
      'Accuracy is non-negotiable.',
      'Every transaction is reviewed and matched to your statements. We use automation where it helps, but human oversight where it matters.',
      'The result: fully reconciled accounts and reports you can trust.',
    ],
  },

  // 10) QBO exclusivity — prevents mismatched leads + positions expertise
  {
    question: 'Do you only work with QuickBooks Online?',
    paragraphs: [
      'Yes — we specialize in QuickBooks Online for speed and accuracy.',
      "If you're using Xero, Wave, or spreadsheets, we can migrate you to QBO quickly so everything runs smoothly going forward.",
    ],
  },

  // 11) No contract — reduces lingering friction
  {
    question: 'Is there a contract or commitment?',
    paragraphs: [
      'No contracts — you can pause or cancel anytime.',
      "We want you to stay because you're happy with the work, not because you're locked in.",
    ],
  },

  // 12) Why choose you — social proof + differentiation
  {
    question: 'Why should I choose Rock Bookkeeping?',
    paragraphs: [
      '• Certified QuickBooks Online ProAdvisors',
      '• Real-world small business experience',
      '• Flat monthly pricing',
      '• Fast cleanup turnaround',
      '• Direct access to your bookkeeper (no corporate runaround)',
      'You get more than bookkeeping — you get clarity, confidence, and support.',
    ],
  },

  // 13) Nationwide reassurance — last, because it's low-friction
  {
    question: 'Do you work with businesses outside of Pittsburgh?',
    paragraphs: [
      'Yes — 100% remote, nationwide.',
      "Whether you're across town or across the country, our process is fast, secure, and seamless.",
    ],
  },
];
