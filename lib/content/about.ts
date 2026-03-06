// gevs-site/lib/content/about.ts
// i18n-ready: extract to messages/en.json when bilingual support is added

export const aboutContent = {
  sectionTitle: 'About Us',
  mission: {
    headline: 'Quality as a competitive advantage',
    body:
      'GEVS is a specialized QA consultancy helping software teams build reliable, ' +
      'fast, and maintainable test suites. We combine deep automation expertise — ' +
      'Playwright, k6, CI/CD pipelines — with AI-driven analysis to find gaps, ' +
      'reduce test debt, and help your team ship with confidence.',
  },
  team: [
    {
      id: 'vgm',
      name: 'Vincenzo Gasparo',
      role: 'Software Developer in Test',
      initials: 'VG',
    },
    {
      id: 'sdb',
      name: 'Samuel De Benedictis',
      role: 'Software Developer in Test',
      initials: 'SDB',
    },
    {
      id: 'ec',
      name: 'Enzo Camuto',
      role: 'Software Developer in Test',
      initials: 'EC',
    },
    {
      id: 'GV',
      name: 'Gabriele Veneri',
      role: 'Software Developer in Test',
      initials: 'GV',
    },
  ],
} as const
