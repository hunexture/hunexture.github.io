// SEO entries for Insights (/insights and /insights/:slug). Merged into seoMeta.
import { getAllArticles } from './articles'

export const insightsStaticPages = {
  '/insights': {
    title: 'Insights | Practical Notes on AI, Websites and Automation | Hunexture',
    description: 'Plain-language articles from Team Hunexture on websites, apps, WhatsApp automation, chatbots and AI features for growing businesses.',
    h1: 'Insights',
  },
}

export const insightsDynamicPages = () => {
  const pages = {}
  getAllArticles().forEach((a) => {
    pages[`/insights/${a.slug}`] = {
      title: `${a.title} | Hunexture Insights`,
      description: a.description,
      h1: a.title,
      parent: { name: 'Insights', path: '/insights' },
      type: 'Article',
      datePublished: a.date,
      body: [{ heading: 'In this article', items: a.sections.map((s) => s.heading) }],
    }
  })
  return pages
}
