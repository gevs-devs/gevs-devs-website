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
      id: 'gev',
      name: 'Giorgio Evangelista',
      role: 'Founder & QA Engineer',
      initials: 'GE',
    },
  ],
} as const
