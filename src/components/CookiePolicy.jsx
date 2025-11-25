import React, { useEffect } from 'react'
import './LegalPages.css'

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Cookie Policy</h1>
        <p className="legal-updated">Last Updated: November 15, 2025</p>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p>
              Cookies allow websites to recognize your device and store information about your preferences or past actions, making your browsing experience more personalized and efficient.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Cookies</h2>
            <p>
              Hunexture uses cookies and similar tracking technologies to enhance your experience on our website, analyze site traffic, understand where our visitors are coming from, and improve our services.
            </p>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>Authentication and security</li>
              <li>Preferences and personalization</li>
              <li>Analytics and performance measurement</li>
              <li>Advertising and marketing</li>
              <li>Social media integration</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and authentication. The website cannot function properly without these cookies.
            </p>
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>session_id</td>
                    <td>Maintains your session state</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>csrf_token</td>
                    <td>Security and CSRF protection</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>auth_token</td>
                    <td>User authentication</td>
                    <td>30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3.2 Preference Cookies</h3>
            <p>
              These cookies allow the website to remember information that changes the way the website behaves or looks, such as your preferred language, theme selection, or region.
            </p>
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>hunexture-theme</td>
                    <td>Stores your theme preference (black/white)</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>language_pref</td>
                    <td>Stores your language preference</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>cookie_consent</td>
                    <td>Remembers your cookie preferences</td>
                    <td>1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3.3 Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.
            </p>
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>24 hours</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>Google Analytics - throttles request rate</td>
                    <td>1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3.4 Marketing Cookies</h3>
            <p>
              These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. These cookies can share that information with other organizations or advertisers.
            </p>
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_fbp</td>
                    <td>Facebook Pixel - tracks conversions</td>
                    <td>3 months</td>
                  </tr>
                  <tr>
                    <td>IDE</td>
                    <td>Google DoubleClick - ad targeting</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>fr</td>
                    <td>Facebook - ad delivery and targeting</td>
                    <td>3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and provide social media features.
            </p>
            <p>Third-party services we use include:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Web analytics service for traffic analysis</li>
              <li><strong>Facebook Pixel:</strong> Tracking conversions and retargeting</li>
              <li><strong>LinkedIn Insights:</strong> Professional audience analytics</li>
              <li><strong>Hotjar:</strong> Heatmaps and user behavior analysis</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. How to Control Cookies</h2>
            <p>
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
            </p>

            <h3>5.1 Browser Settings</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
              <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
            </ul>

            <h3>5.2 Opt-Out Tools</h3>
            <p>You can also use these tools to manage your cookie preferences:</p>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Facebook Cookie Settings</a></li>
              <li><a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
              <li><a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
            </ul>

            <h3>5.3 Do Not Track</h3>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals, so our website does not respond to DNT signals at this time.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Mobile Device Identifiers</h2>
            <p>
              If you access our website through a mobile device, we may collect unique device identifiers and mobile network information. You can manage these through your device settings:
            </p>
            <ul>
              <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking</li>
              <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Consequences of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly. Specifically:
            </p>
            <ul>
              <li>You may need to re-enter your login information each time you visit</li>
              <li>Your theme preferences will not be saved</li>
              <li>Some interactive features may not work correctly</li>
              <li>We won't be able to remember your preferences</li>
              <li>You may see less relevant content and advertisements</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our use of cookies or for legal, regulatory, or operational reasons. We encourage you to review this policy periodically.
            </p>
            <p>
              The "Last Updated" date at the top of this page indicates when this Cookie Policy was last revised.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
            <ul className="contact-info">
              <li><strong>Email:</strong> privacy@hunexture.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Tech Street, Innovation City, TC 12345</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Related Policies</h2>
            <p>For more information about how we protect your privacy, please review:</p>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
