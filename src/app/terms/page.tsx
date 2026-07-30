"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <>
      <section className="relative min-h-[30vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: July 30, 2026</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website <Link href="https://slymaxnig.com">slymaxnig.com</Link> and the services 
              provided by Slymax Nigeria Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2>2. About Slymax Nigeria Limited</h2>
            <p>
              Slymax Nigeria Limited is a reliable indigenous company established in 2000, providing services in:
            </p>
            <ul>
              <li>Telecommunication (site maintenance, mast building, fibre optics, aviation light installation)</li>
              <li>Real Estate (land development, property development, property leasing, civil works)</li>
              <li>Oil and Gas (gas equipment, pipeline services, oil & gas support)</li>
              <li>Haulage & Logistics (aggregate haulage, equipment transport, fleet services)</li>
              <li>Building & Construction (general building, civil works, infrastructure)</li>
              <li>Steel Material Supply, Scaffold Material, Gas Equipment, Fire Equipment</li>
              <li>Heavy Equipment Leasing, Technical Manpower, Procurement</li>
              <li>Operation & Maintenance, Civil & Structural Engineering</li>
              <li>Mechanical Services, Rural & Urban Electrification, Water Engineering</li>
            </ul>
            <p>
              Head Office: 21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State.
            </p>

            <h2>3. Services</h2>
            <h3>3.1 Service Provision</h3>
            <p>
              All services are provided subject to written agreements, contracts, and proposals between Slymax Nigeria Limited 
              and the client. The information on our website is for general informational purposes only and does not constitute 
              a binding offer or contract for services.
            </p>

            <h3>3.2 Quotations and Proposals</h3>
            <p>
              Quotations provided through our website or contact forms are estimates based on initial project requirements. 
              Final pricing is determined after a detailed assessment and is confirmed in a formal written contract. Quotations 
              are valid for 30 days from the date of issue unless otherwise stated.
            </p>

            <h3>3.3 Project Contracts</h3>
            <p>
              All projects are governed by separate, formal contracts that outline specific terms, deliverables, timelines, 
              payment schedules, and warranties. These Terms of Service supplement but do not replace project-specific contracts.
            </p>

            <h2>4. Website Use</h2>
            <h3>4.1 Permitted Use</h3>
            <p>You may use our website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use automated systems to access the website without our written permission</li>
              <li>Reproduce, duplicate, copy, sell, or exploit any website content without written consent</li>
            </ul>

            <h3>4.2 Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Slymax 
              Nigeria Limited and is protected by Nigerian and international intellectual property laws. Unauthorized use of 
              any content is strictly prohibited.
            </p>

            <h2>5. Contact Form Submissions</h2>
            <p>
              When you submit information through our contact form, you agree that:
            </p>
            <ul>
              <li>The information provided is accurate and complete</li>
              <li>We may contact you regarding your inquiry using the contact details provided</li>
              <li>Submission of a form does not constitute a binding agreement for services</li>
              <li>We reserve the right to decline service requests at our discretion</li>
            </ul>

            <h2>6. Payment Terms</h2>
            <p>
              Payment terms for all services are specified in individual project contracts. General terms include:
            </p>
            <ul>
              <li>Payments are made in Nigerian Naira (₦) unless otherwise agreed</li>
              <li>Invoicing follows the milestones outlined in the project contract</li>
              <li>Late payments may incur interest charges as specified in the contract</li>
              <li>All quoted prices exclude VAT unless explicitly stated</li>
            </ul>

            <h2>7. Warranties and Liability</h2>
            <h3>7.1 Service Warranties</h3>
            <p>
              Specific warranties for projects and services are outlined in individual project contracts. Slymax Nigeria Limited 
              stands behind the quality of its work and is committed to delivering projects that meet agreed specifications.
            </p>

            <h3>7.2 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Slymax Nigeria Limited shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from:
            </p>
            <ul>
              <li>Use of or inability to use the website</li>
              <li>Any errors or omissions in website content</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party actions or services</li>
            </ul>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Slymax Nigeria Limited, its directors, employees, and agents from any 
              claims, losses, damages, liabilities, and expenses arising from your use of the website or violation of these terms.
            </p>

            <h2>9. Confidentiality</h2>
            <p>
              Information shared between Slymax Nigeria Limited and clients during project engagement is treated as confidential. 
              Both parties agree to protect confidential information and not disclose it to third parties without prior written consent, 
              except as required by law.
            </p>

            <h2>10. Force Majeure</h2>
            <p>
              Slymax Nigeria Limited shall not be liable for delays or failure to perform obligations due to circumstances beyond 
              reasonable control, including but not limited to natural disasters, government actions, labor disputes, supply chain 
              disruptions, or other force majeure events.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. 
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Benin City, 
              Edo State, Nigeria.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated 
              to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an 
              updated &quot;Last updated&quot; date. Your continued use of the website after changes are posted constitutes 
              acceptance of the revised terms.
            </p>

            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Slymax Nigeria Limited</strong></li>
              <li>21 Philip Omosigho Street, EKEA off Sapele Road, Benin City, Edo State</li>
              <li>Email: <Link href="mailto:info@slymaxnig.com">info@slymaxnig.com</Link></li>
              <li>Phone: 08034088880 | 08055559758 | 08023019197</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
