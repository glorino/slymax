"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: July 30, 2026</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            <h2>1. Introduction</h2>
            <p>
              Slymax Nigeria Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              <Link href="https://slymaxnig.com"> slymaxnig.com</Link> and use our services.
            </p>
            <p>
              By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the terms 
              of this Privacy Policy, please do not access the website.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information when you fill out our contact form or interact with our services:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Project details and requirements</li>
              <li>Budget range</li>
              <li>Project timeline</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of your visit</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes for our services (telecommunication, real estate, oil & gas, haulage & logistics, building & construction, and related services)</li>
              <li>Schedule consultations and site visits</li>
              <li>Process your service requests</li>
              <li>Improve our website and services</li>
              <li>Send project updates and service-related communications</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2>4. How We Share Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our website and conducting our business, subject to confidentiality agreements.</li>
              <li><strong>Project Partners:</strong> Subcontractors or suppliers involved in your project, with your consent.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, 
              and secure data storage practices. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie 
              settings through your browser preferences. Disabling cookies may affect certain functionality of the website.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the information below.</p>

            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
              including to satisfy any legal, accounting, or reporting requirements. Project-related information is retained for 
              the duration of the project and up to 7 years thereafter for contractual and legal compliance.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected personal information from a child, we will 
              take steps to delete it promptly.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the website after changes 
              constitutes acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
