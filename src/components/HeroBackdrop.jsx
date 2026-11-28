import React, { useEffect, useRef } from 'react'

// Decorative motion layer behind the hero: two drifting colour glows, pulses
// travelling along the drafting grid and a soft light that follows the pointer.
// It also feeds the pointer position to the hero (for the drawing tilt) and
// pauses every looping animation while the hero is off screen.
const HeroBackdrop = () => {
  const ref = useRef(null)

  useEffect(() => {
    const layer = ref.current
    const hero = layer && layer.parentElement
    if (!hero) return undefined

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => hero.classList.toggle('is-offscreen', !entry.isIntersecting))
      io.observe(hero)
    }

    const follow = window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches
    let frame = 0
    let last
    const apply = () => {
      frame = 0
      const r = hero.getBoundingClientRect()
      const x = last.clientX - r.left
      const y = last.clientY - r.top
      hero.style.setProperty('--px', `${x}px`)
      hero.style.setProperty('--py', `${y}px`)
      // -0.5 … 0.5 from the centre of the hero
      hero.style.setProperty('--tx', (x / r.width - 0.5).toFixed(3))
      hero.style.setProperty('--ty', (y / r.height - 0.5).toFixed(3))
      hero.classList.add('has-pointer')
    }
    const onMove = (e) => {
      last = e
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      frame = 0
      hero.classList.remove('has-pointer')
      hero.style.setProperty('--tx', 0)
      hero.style.setProperty('--ty', 0)
    }
    if (follow) {
      hero.addEventListener('pointermove', onMove, { passive: true })
      hero.addEventListener('pointerleave', onLeave)
    }

    return () => {
      if (io) io.disconnect()
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="hm-backdrop" aria-hidden="true">
      <span className="hm-orb hm-orb--signal" />
      <span className="hm-orb hm-orb--mint" />
      <span className="hm-cursor" />
      {[1, 2, 3].map((n) => <span key={`h${n}`} className={`hm-pulse hm-pulse--h hm-pulse--h${n}`} />)}
      {[1, 2].map((n) => <span key={`v${n}`} className={`hm-pulse hm-pulse--v hm-pulse--v${n}`} />)}
    </div>
  )
}

export default HeroBackdrop
