// gevs-site/lib/content/services.ts
// i18n-ready: extract to messages/en.json when bilingual support is added

export const servicesContent = {
  sectionTitle: 'Services',
  sectionSubtitle: 'End-to-end quality engineering for modern software teams.',
  services: [
    {
      id: 'test-automation',
      title: 'Test Automation',
      description:
        'We design and build fast, maintainable automation suites using Playwright, Selenium, ' +
        'and Cypress — with clear architecture so your team can own and extend them.',
      tools: ['Playwright', 'Selenium', 'Cypress'],
    },
    {
      id: 'load-performance',
      title: 'Load & Performance Testing',
      description:
        'We model real-world traffic, run load and stress tests with k6, JMeter, and Gatling, ' +
        'and deliver actionable reports on system capacity and bottlenecks.',
      tools: ['k6', 'JMeter', 'Gatling'],
    },
    {
      id: 'ci-cd',
      title: 'CI/CD Integration',
      description:
        'We embed quality gates directly into your pipelines on GitHub Actions, GitLab CI, ' +
        'or Jenkins — so every commit is tested and every release is validated automatically.',
      tools: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
    },
    {
      id: 'ai-qa',
      title: 'AI-Augmented QA',
      description:
        'We apply AI-assisted test generation and defect analysis to accelerate coverage, ' +
        'surface regressions earlier, and reduce the manual effort of test maintenance.',
      tools: ['AI-assisted generation', 'Defect analysis', 'Coverage gap detection'],
    },
  ],
} as const
