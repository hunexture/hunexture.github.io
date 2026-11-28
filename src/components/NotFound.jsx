import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <main id="main" className="page-error">
    <h1>Page not found</h1>
    <p>The address may be wrong, or the page has moved.</p>
    <div className="page-error-actions">
      <Link to="/">Go to home page</Link>
      <Link to="/services">See our services</Link>
      <Link to="/portfolio">See our work</Link>
    </div>
  </main>
)

export default NotFound
