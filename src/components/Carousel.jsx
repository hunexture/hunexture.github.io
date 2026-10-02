import React, { Children, useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'
import './Carousel.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Accessible scroll-snap carousel.
 * - Native swipe / trackpad scrolling (scroll-snap)
 * - Visible prev/next buttons and dot navigation
 * - Arrow-key navigation when the viewport is focused
 * - Optional autoplay that pauses on hover/focus, has a visible pause control,
 *   and is disabled entirely under prefers-reduced-motion
 *
 * Slide width is controlled with the `slideWidth` prop (any CSS length).
 */
const Carousel = ({
  label,
  children,
  slideWidth = '100%',
  gap = '24px',
  autoPlay = 0,
  className = ''
}) => {
  const viewportRef = useRef(null)
  const slides = Children.toArray(children)
  const [active, setActive] = useState(0)
  const [positions, setPositions] = useState(slides.length)
  const [paused, setPaused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const canAutoPlay = autoPlay > 0 && !prefersReducedMotion()

  const getStep = useCallback(() => {
    const viewport = viewportRef.current
    const first = viewport?.firstElementChild
    if (!viewport || !first) return 0
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(viewport).columnGap || 0)
  }, [])

  const measure = useCallback(() => {
    const viewport = viewportRef.current
    const step = getStep()
    if (!viewport || !step) return
    const maxScroll = viewport.scrollWidth - viewport.clientWidth
    setPositions(Math.max(1, Math.round(maxScroll / step) + 1))
    setActive(Math.round(viewport.scrollLeft / step))
  }, [getStep])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, slides.length])

  const goTo = useCallback((index) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const target = Math.max(0, Math.min(index, positions - 1))
    viewport.scrollTo({
      left: target * getStep(),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    })
  }, [getStep, positions])

  // Autoplay: loops back to the start, stops while hovered/focused or user-paused
  useEffect(() => {
    if (!canAutoPlay || paused || userPaused) return
    const id = setInterval(() => {
      goTo(active >= positions - 1 ? 0 : active + 1)
    }, autoPlay)
    return () => clearInterval(id)
  }, [canAutoPlay, paused, userPaused, active, positions, autoPlay, goTo])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1) }
    if (e.key === 'Home') { e.preventDefault(); goTo(0) }
    if (e.key === 'End') { e.preventDefault(); goTo(positions - 1) }
  }

  return (
    <div
      className={`carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      style={{ '--carousel-slide-width': slideWidth, '--carousel-gap': gap }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}
    >
      <div
        className="carousel-viewport"
        ref={viewportRef}
        tabIndex={0}
        onScroll={measure}
        onKeyDown={handleKeyDown}
        aria-live={canAutoPlay && !paused && !userPaused ? 'off' : 'polite'}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {positions > 1 && (
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => goTo(active - 1)}
            disabled={active <= 0}
            aria-label="Previous slide"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div className="carousel-dots">
            {Array.from({ length: positions }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${active === i ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active === i ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={() => goTo(active + 1)}
            disabled={active >= positions - 1}
            aria-label="Next slide"
          >
            <FaChevronRight aria-hidden="true" />
          </button>

          {canAutoPlay && (
            <button
              type="button"
              className="carousel-arrow carousel-toggle"
              onClick={() => setUserPaused(p => !p)}
              aria-label={userPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
            >
              {userPaused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Carousel
