import React from 'react'
import { isChunkError, reloadOnce } from '../utils/chunkReload'

// Without a boundary, any error while loading or rendering a page unmounts the
// whole app and leaves a blank white screen.
class ErrorBoundary extends React.Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    if (isChunkError(error)) reloadOnce()
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <main id="main" className="page-error" role="alert">
        <h1>This page did not load</h1>
        <p>Check your connection, then reload the page.</p>
        <div className="page-error-actions">
          <button type="button" onClick={() => window.location.reload()}>Reload page</button>
          <a href="/">Go to home page</a>
        </div>
      </main>
    )
  }
}

export default ErrorBoundary
