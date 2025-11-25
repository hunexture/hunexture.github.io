import React, { useEffect } from 'react'
import './LegalPages.css'

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last Updated: November 15, 2025</p>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Hunexture ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use of Our Services</h2>
            <h3>2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>

            <h3>2.2 License to Use</h3>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your personal or business purposes.
            </p>

            <h3>2.3 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe upon the rights of others, including intellectual property rights</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Collect or harvest any information from our services using automated means</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Engage in any form of harassment, abuse, or spam</li>
              <li>Use our services to compete with us or create a similar service</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Intellectual Property Rights</h2>
            <h3>3.1 Our Content</h3>
            <p>
              All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, software, and design, are owned by Hunexture or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>3.2 Your Content</h3>
            <p>
              When you submit content to us (such as feedback, suggestions, or project materials), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content for the purpose of providing our services.
            </p>

            <h3>3.3 Trademarks</h3>
            <p>
              "Hunexture" and our logos are trademarks of our company. You may not use these trademarks without our prior written permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Services and Deliverables</h2>
            <h3>4.1 Service Descriptions</h3>
            <p>
              We provide AI-powered solutions, web development, mobile applications, and related technology services. Specific project details, timelines, and deliverables will be outlined in separate service agreements or statements of work.
            </p>

            <h3>4.2 Modifications to Services</h3>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
            </p>

            <h3>4.3 Third-Party Services</h3>
            <p>
              Our services may integrate with or rely on third-party services. We are not responsible for the availability, functionality, or terms of such third-party services.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Payment Terms</h2>
            <h3>5.1 Fees</h3>
            <p>
              Fees for our services will be specified in separate service agreements. All fees are exclusive of taxes unless otherwise stated.
            </p>

            <h3>5.2 Payment</h3>
            <p>
              Payment terms will be outlined in your service agreement. Failure to make timely payments may result in suspension or termination of services.
            </p>

            <h3>5.3 Refunds</h3>
            <p>
              Refund policies, if applicable, will be specified in your service agreement. Generally, custom development work is non-refundable once commenced.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Privacy and Data Protection</h2>
            <p>
              Our collection and use of personal information is governed by our <a href="/privacy-policy">Privacy Policy</a>. By using our services, you consent to our collection and use of information as described in the Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This obligation survives the termination of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Warranties and Disclaimers</h2>
            <h3>8.1 Limited Warranty</h3>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner. Any specific warranties for deliverables will be outlined in your service agreement.
            </p>

            <h3>8.2 Disclaimer</h3>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that our services will be uninterrupted, error-free, or secure, or that any defects will be corrected.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HUNEXTURE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Hunexture and our officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses arising out of or related to:
            </p>
            <ul>
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of a third party</li>
              <li>Any content you submit to us</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Term and Termination</h2>
            <h3>11.1 Term</h3>
            <p>
              These Terms remain in effect while you use our services.
            </p>

            <h3>11.2 Termination by You</h3>
            <p>
              You may stop using our services at any time. Project-specific termination terms will be outlined in your service agreement.
            </p>

            <h3>11.3 Termination by Us</h3>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice, if you breach these Terms or for any other reason at our sole discretion.
            </p>

            <h3>11.4 Effect of Termination</h3>
            <p>
              Upon termination, your right to use our services will immediately cease. Provisions that by their nature should survive termination (including confidentiality, intellectual property, disclaimers, and limitations of liability) shall survive.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Dispute Resolution</h2>
            <h3>12.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h3>12.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association], except where prohibited by law.
            </p>

            <h3>12.3 Class Action Waiver</h3>
            <p>
              You agree to bring claims against us only in your individual capacity and not as a participant in any class or representative action.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. General Provisions</h2>
            <h3>13.1 Entire Agreement</h3>
            <p>
              These Terms, together with any service agreements and our Privacy Policy, constitute the entire agreement between you and us regarding our services.
            </p>

            <h3>13.2 Amendments</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>

            <h3>13.3 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3>13.4 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3>13.5 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="contact-info">
              <li><strong>Email:</strong> legal@hunexture.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Tech Street, Innovation City, TC 12345</li>
            </ul>
          </section>

          <section className="legal-section acknowledgment">
            <p>
              <strong>BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
