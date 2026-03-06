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
      outcomes: [
        'Regression time cut from hours to minutes',
        '80%+ coverage on critical user flows from day one',
        'Full suite ownership — your team extends it without us',
      ],
      tools: ['Playwright', 'Selenium', 'Cypress'],
    },
    {
      id: 'load-performance',
      title: 'Load & Performance Testing',
      description:
        'We model real-world traffic, run load and stress tests with k6, JMeter, and Gatling, ' +
        'and deliver actionable reports on system capacity and bottlenecks.',
      outcomes: [
        'Know your breaking point before your users do',
        'Clear capacity report: req/sec, p95 latency, failure thresholds',
        'Bottlenecks identified and documented, not just flagged',
      ],
      tools: ['k6', 'JMeter', 'Gatling'],
    },
    {
      id: 'ci-cd',
      title: 'CI/CD Integration',
      description:
        'We embed quality gates directly into your pipelines on GitHub Actions, GitLab CI, ' +
        'or Jenkins — so every commit is tested and every release is validated automatically.',
      outcomes: [
        'Every PR validated automatically before merge',
        'Failed builds blocked at the gate, not found in production',
        'Zero-config onboarding for your existing pipeline',
      ],
      tools: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
    },
    {
      id: 'ai-qa',
      title: 'AI-Augmented QA',
      description:
        'We apply AI-assisted test generation and defect analysis to accelerate coverage, ' +
        'surface regressions earlier, and reduce the manual effort of test maintenance.',
      outcomes: [
        'Faster test generation for new features',
        'Regression gaps surfaced automatically',
        'Less time maintaining tests, more time shipping',
      ],
      tools: ['AI-assisted generation', 'Defect analysis', 'Coverage gap detection'],
    },
    {
      id: 'coaching',
      title: 'QA Coaching & Training',
      description:
        'We upskill your team through hands-on workshops and mentoring sessions covering test automation, ' +
        'performance testing, CI/CD quality gates, and AI-assisted QA — so your engineers lead quality independently.',
      outcomes: [
        'Team self-sufficient in automation and QA practices',
        'Tailored workshops on Playwright, k6, CI/CD, and AI-assisted testing',
        'Ongoing mentoring to embed quality culture long-term',
      ],
      tools: ['Workshops', 'Pair programming', 'Code review'],
    },
  ],
} as const
