import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * Site-wide route behaviour:
 * 1. Scroll: new page → top; URL with #hash → that section (after lazy pages render).
 * 2. Scroll reveal: any element with `data-reveal` fades/slides in when it enters
 *    the viewport. Optional `data-reveal-delay="1..4"` staggers siblings.
 *    Styles live in brand.css; the `reveal-ready` class on <html> is only added
 *    when JS runs, so content is never hidden without it.
 */
export default function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let tries = 0
      const tryScroll = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else if (tries++ < 20) setTimeout(tryScroll, 50)
      }
      tryScroll()
    } else {
      // 'instant' overrides the global smooth scrolling, which would otherwise
      // animate through the new page from wherever the old one was left
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const rafs = new Set()
    const raf = (fn) => {
      const id = requestAnimationFrame((t) => {
        rafs.delete(id)
        fn(t)
      })
      rafs.add(id)
      return id
    }

    // ── count-up ──
    const countUp = (el) => {
      if (el.dataset.counted) return
      el.dataset.counted = '1'
      const original = el.textContent
      const m = original.match(/^([^0-9-]*)(-?[\d,]*\.?\d+)(.*)$/s)
      if (!m || reduce) return
      const [, prefix, numStr, suffix] = m
      const target = parseFloat(numStr.replace(/,/g, ''))
      if (!isFinite(target)) return
      const decimals = (numStr.split('.')[1] || '').length
      const comma = numStr.includes(',')
      const fmt = (v) => {
        const t = v.toFixed(decimals)
        return comma ? Number(t).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : t
      }
      const dur = 1200
      let start
      const step = (now) => {
        if (start === undefined) start = now
        const p = Math.min((now - start) / dur, 1)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = p < 1 ? prefix + fmt(target * e) + suffix : original
        if (p < 1) raf(step)
      }
      el.textContent = prefix + fmt(0) + suffix
      raf(step)
    }

    // ── svg draw ──
    const prepDraw = (el) => {
      const shapes = el.matches('path,line,polyline,circle,ellipse,rect,polygon')
        ? [el]
        : Array.from(el.querySelectorAll('path,line,polyline,circle,ellipse,rect,polygon'))
      shapes.forEach((sh, i) => {
        if (typeof sh.getTotalLength !== 'function') return
        try {
          sh.style.setProperty('--len', Math.ceil(sh.getTotalLength()))
        } catch (e) {
          return
        }
        sh.style.setProperty('--di', i)
        sh.classList.add('draw-path')
      })
    }

    const stagger = (parent) => {
      Array.from(parent.children)
        .slice(0, 8)
        .forEach((c, i) => c.style.setProperty('--i', i))
    }

    const reveal = (el) => {
      el.classList.add('is-revealed')
      if (el.hasAttribute('data-count')) countUp(el)
      el.querySelectorAll('[data-count]').forEach(countUp)
    }

    if (reduce || !('IntersectionObserver' in window)) {
      root.classList.remove('reveal-ready')
      return () => rafs.forEach(cancelAnimationFrame)
    }
    root.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      // threshold must stay 0: with a ratio, blocks taller than the screen
      // allows (long card grids on phones) never reach it and stay invisible
      { rootMargin: '0px', threshold: 0 }
    )

    // per effect run: a flag stored on the element would survive cleanup and
    // leave it hidden because the next observer would skip it
    const seen = new WeakSet()
    const sel = '[data-reveal],[data-reveal-stagger],[data-draw],[data-count]'
    const scan = () => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.classList.contains('is-revealed') || seen.has(el)) return
        seen.add(el)
        if (el.hasAttribute('data-reveal-stagger')) stagger(el)
        if (el.hasAttribute('data-draw')) prepDraw(el)
        io.observe(el)
      })
    }

    scan()
    // lazy routes and async content mount after this effect runs
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    // ── card spotlight (one delegated listener) ──
    let pe = null
    let spot = null
    const canHover = window.matchMedia('(hover: hover)').matches
    const onMove = (e) => {
      pe = e
      if (spot) return
      spot = raf(() => {
        spot = null
        const card = pe.target.closest && pe.target.closest('.brand-card,[data-spotlight]')
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', pe.clientX - r.left + 'px')
        card.style.setProperty('--my', pe.clientY - r.top + 'px')
      })
    }
    if (canHover) document.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      if (canHover) document.removeEventListener('pointermove', onMove)
      rafs.forEach(cancelAnimationFrame)
      document.querySelectorAll('[data-count]').forEach((el) => delete el.dataset.counted)
    }
  }, [pathname])

  return null
}
