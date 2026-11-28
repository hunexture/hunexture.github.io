import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
// seoMeta pulls in every data file, so load it on demand to keep it out of the main bundle.
let seoPromise
const loadSeo = () =>
  (seoPromise ||= import('../seo/seoMeta').catch((error) => {
    seoPromise = undefined // allow a retry on the next navigation
    throw error
  }))

const setMeta = (name, value, attr = 'name') => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

// Keeps <title>, description, canonical, social tags and JSON-LD in sync with the route.
const RouteSeo = () => {
  const { pathname } = useLocation()
  const firstRoute = useRef(true)

  useEffect(() => {
    let cancelled = false
    const apply = ({ getSeoForPath, buildJsonLd }) => {
      if (cancelled) return
      const seo = getSeoForPath(pathname)
      if (!seo) {
        document.title = 'Page not found | Hunexture'
        setMeta('robots', 'noindex, follow')
        return
      }
      document.title = seo.title
      setMeta('robots', 'index, follow, max-image-preview:large')
      setMeta('description', seo.description)
      setMeta('og:title', seo.title, 'property')
      setMeta('og:description', seo.description, 'property')
      setMeta('og:url', seo.url, 'property')
      setMeta('twitter:title', seo.title)
      setMeta('twitter:description', seo.description)

      let canonical = document.head.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = seo.url

      let ld = document.head.querySelector('script[data-route-ld]')
      if (!ld) {
        ld = document.createElement('script')
        ld.type = 'application/ld+json'
        ld.setAttribute('data-route-ld', '')
        document.head.appendChild(ld)
      }
      ld.textContent = JSON.stringify(buildJsonLd(seo))
    }
    const run = () => loadSeo().then(apply).catch(() => {}) // tags are not worth an error
    // The first page arrives prerendered with correct tags, so wait until the
    // visible content has loaded before fetching the data files.
    let timer
    if (firstRoute.current) timer = setTimeout(run, 3000)
    else run()
    firstRoute.current = false
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [pathname])

  return null
}

export default RouteSeo
