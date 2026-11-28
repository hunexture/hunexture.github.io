import { lazy } from 'react'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// React.lazy that retries once, so a brief network drop does not fail the page.
export default function lazyWithRetry(load) {
  return lazy(() => load().catch(() => wait(800).then(load)))
}
