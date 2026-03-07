// gevs-site/lib/content/about.ts

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
      role: 'QA Automation & Platform Engineer',
      initials: 'VG',
      bio: 'Expert in test automation frameworks with a strong focus on Playwright and TypeScript. Designs scalable, maintainable test architectures and integrates them end-to-end into Docker, Kubernetes, and CI/CD pipelines.',
      skills: ['Playwright', 'TypeScript', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      id: 'sdb',
      name: 'Samuel De Benedictis',
      role: 'QA & Full-Stack Engineer',
      initials: 'SDB',
      bio: 'Specializes in load testing, API testing, and test automation. Brings full-stack depth with TypeScript, Next.js, and React — bridging the gap between development and quality engineering.',
      skills: ['Load Testing', 'API Testing', 'TypeScript', 'Next.js', 'React'],
    },
    {
      id: 'ec',
      name: 'Enzo Camuto',
      role: 'Performance Testing Lead',
      initials: 'EC',
      bio: 'Over 20 years of software quality experience. Deep expertise in performance and stress testing, with a passion for AI-assisted quality improvement and a strong Linux background.',
      skills: ['Performance Testing', 'AI / ML', 'Linux', 'Stress Testing'],
    },
    {
      id: 'gv',
      name: 'Gabriele Veneri',
      role: 'QA Engineer & Backend Developer',
      initials: 'GV',
      bio: 'Expert in QA practices and test automation, with a solid backend development foundation. Advocates for quality at every layer of the stack, from unit tests to end-to-end validation.',
      skills: ['QA Practices', 'Test Automation', 'Unit Testing', 'Backend Dev'],
    },
  ],
} as const
