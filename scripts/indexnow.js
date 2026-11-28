// Tells IndexNow search engines (Bing, which also feeds other search and AI
// products, Yandex, Seznam, Naver) that the site's pages changed.
// Run after a deploy: `node scripts/indexnow.js`. Needs build/sitemap.xml.
const fs = require('fs')
const path = require('path')

const HOST = 'hunexture.com'
// Not a secret: IndexNow proves ownership by finding this file on the site.
const KEY = 'c94d465717e00ae04e5a10de3e14347d'
const keyLocation = `https://${HOST}/${KEY}.txt`

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const keyIsLive = async () => {
  try {
    const res = await fetch(keyLocation, { cache: 'no-store' })
    return res.ok && (await res.text()).trim() === KEY
  } catch (e) {
    return false
  }
}

const main = async () => {
  const sitemap = fs.readFileSync(path.join(__dirname, '..', 'build', 'sitemap.xml'), 'utf8')
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

  // GitHub Pages takes a little while to publish the new files
  let live = false
  for (let i = 0; i < 20 && !live; i++) {
    live = await keyIsLive()
    if (!live) await wait(15000)
  }
  if (!live) throw new Error(`${keyLocation} is not reachable`)

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
  })
  if (!res.ok) throw new Error(`IndexNow replied ${res.status}: ${await res.text()}`)
  console.log(`IndexNow: submitted ${urlList.length} URLs (status ${res.status})`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
