// Post-build SEO step for the GitHub Pages SPA.
//  1. Writes build/<route>/index.html for every route, with route-specific <head> tags,
//     so crawlers get a 200 response and correct metadata without running JS
//     (GitHub Pages otherwise serves the 404.html redirect for deep links).
//  2. Generates sitemap.xml and points robots.txt at it.
// Run automatically via the "postbuild" npm script.
require('sucrase/register')

const fs = require('fs')
const path = require('path')

const buildDir = path.join(__dirname, '..', 'build')
const { getAllSeoPages, getSeoForPath, buildJsonLd } = require('../src/seo/seoMeta')
const { SITE_URL } = require('../src/data/companyData')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8')

const setTag = (html, regex, replacement) => (regex.test(html) ? html.replace(regex, replacement) : html)

const render = (seo, links) => {
  let html = template
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(seo.description)}" />`)
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${seo.url}" />`)
  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(seo.title)}" />`)
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(seo.description)}" />`)
  html = setTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${esc(seo.title)}" />`)
  html = setTag(html, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${esc(seo.description)}" />`)
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${seo.url}" />`)

  const ld = `<script type="application/ld+json" data-route-ld>${JSON.stringify(buildJsonLd(seo))}</script>`
  html = html.replace('</head>', `${ld}</head>`)

  const nav = links
    .map((l) => `<li><a href="${l.path}">${esc(l.label)}</a></li>`)
    .join('')
  const body = (seo.body || [])
    .map((sec) => `<h2>${esc(sec.heading)}</h2><ul>${sec.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`)
    .join('')
  const faqs = (seo.faqs || []).length
    ? `<h2>Frequently asked questions</h2>${seo.faqs.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join('')}`
    : ''
  const fallback =
    `<noscript><main><h1>${esc(seo.h1)}</h1><p>${esc(seo.description)}</p>${body}${faqs}` +
    `<nav aria-label="Site"><ul>${nav}</ul></nav></main></noscript>`
  const bodyAt = html.indexOf('<body')
  html = html.slice(0, bodyAt) + html.slice(bodyAt).replace(/<noscript>[\s\S]*?<\/noscript>/, fallback)
  return html
}

const mainLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/ai', label: 'AI & Machine Learning' },
  { path: '/industries', label: 'Industries' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/business-profile', label: 'Business profile' },
]

const pages = getAllSeoPages()
const routes = Object.keys(pages)

routes.forEach((route) => {
  const seo = getSeoForPath(route)
  const html = render(seo, mainLinks)
  const out = route === '/' ? path.join(buildDir, 'index.html') : path.join(buildDir, route, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
})

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const priority = (r) => (r === '/' ? '1.0' : r.split('/').length === 2 ? '0.8' : '0.6')
const legal = new Set(['/privacy-policy', '/terms-of-service', '/cookie-policy'])
const urls = routes
  .map((r) => {
    const loc = r === '/' ? `${SITE_URL}/` : `${SITE_URL}${r}/`
    const p = legal.has(r) ? '0.2' : priority(r)
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${p}</priority></url>`
  })
  .join('\n')
fs.writeFileSync(
  path.join(buildDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
)

fs.writeFileSync(
  path.join(buildDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
)

// llms.txt: a plain-language site map for AI assistants and answer engines.
const group = (title, prefix) => {
  const rows = routes.filter((r) => r.startsWith(prefix))
  if (!rows.length) return ''
  const lines = rows.map((r) => `- [${pages[r].h1}](${SITE_URL}${r}/): ${pages[r].description}`)
  return `\n## ${title}\n${lines.join('\n')}\n`
}
const llms =
  `# Hunexture\n\n> ${pages['/'].description}\n\nContact: info@hunexture.com | Ahmedabad, Gujarat, India\n` +
  group('Services', '/services/') +
  group('AI & machine learning', '/ai/') +
  group('Industries', '/industries/') +
  group('Case studies', '/portfolio/')
fs.writeFileSync(path.join(buildDir, 'llms.txt'), llms)

console.log(`SEO: prerendered ${routes.length} routes, wrote sitemap.xml and robots.txt`)
