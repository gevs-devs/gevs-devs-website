// gevs-site/lib/content/tech.ts
// i18n-ready: extract to messages/en.json when bilingual support is added

export const techContent = {
  sectionTitle: 'Tools We Use',
  sectionSubtitle: 'Industry-standard tooling — automation, load testing, CI/CD, and AI.',
} as const

export const techTools = [
  { name: 'Playwright',      slug: 'playwright'     },
  { name: 'Selenium',        slug: 'selenium'        },
  { name: 'Cypress',         slug: 'cypress'         },
  { name: 'k6',              slug: 'k6'              },
  { name: 'Apache JMeter',   slug: 'apachejmeter'    },
  { name: 'Gatling',         slug: 'gatling'         },
  { name: 'GitHub Actions',  slug: 'githubactions'   },
  { name: 'GitLab',          slug: 'gitlab'          },
  { name: 'Jenkins',         slug: 'jenkins'         },
  { name: 'OpenAI',          slug: 'openai'          },
] as const
