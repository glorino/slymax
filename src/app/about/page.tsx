"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Building2, Target, Lightbulb, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"


const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-incident safety culture with comprehensive HSE programs and continuous training for all personnel. We never compromise on safety.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "ISO 9001:2015 certified processes ensuring every project meets international quality standards. Precision in every detail.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Long-term relationships built on transparency, reliability, and exceeding client expectations. Your success is our success.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description: "Embracing modern construction methods and technology for efficient, sustainable solutions. Building for the future.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Ethical business practices, honest communication, and accountability in every interaction. We do what we say.",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description: "200+ certified engineers, technicians, and project managers with decades of combined industry experience.",
  },
]

const milestones = [
  { year: "1974", title: "Company Founded", description: "Established as a small construction firm in Owerri, Imo State" },
  { year: "1985", title: "First Major Contract", description: "Awarded first federal government infrastructure project" },
  { year: "1990", title: "Steel Division Launched", description: "Expanded into steel material supply and distribution nationwide" },
  { year: "2000", title: "ISO Certification", description: "Achieved ISO 9001 quality management certification" },
  { year: "2005", title: "Scaffolding Division", description: "Added scaffold material supply and rental services" },
  { year: "2010", title: "Gas & Fire Equipment", description: "Became authorized distributor for major industrial gas and fire safety brands" },
  { year: "2015", title: "Heavy Equipment Fleet", description: "Launched heavy equipment leasing division with modern fleet" },
  { year: "2018", title: "NNPC/DPR Approval", description: "Became approved vendor for Nigeria's oil & gas sector" },
  { year: "2022", title: "Jib Crane Manufacturing", description: "Started custom jib crane design, fabrication, and installation" },
  { year: "2024", title: "500+ Projects", description: "Celebrating 50 years with 500+ successful projects nationwide" },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management", 
  "ISO 45001:2018 Occupational Health & Safety",
  "NNPC/DPR Approved Vendor",
  "CAC Registered (RC 1234567)",
  "NSE Corporate Member",
  "COREN Registered Engineers",
  "NISP Certified Safety Professionals",
]

const leadership = [
  {
    name: "Engr. Maxwell Okonkwo",
    role: "Founder & Chairman",
    bio: "Visionary leader with 50+ years in construction and industrial services. Fellow of NSE, COREN registered.",
    image: "/team/founder.jpg",
  },
  {
    name: "Engr. Chika Okonkwo",
    role: "Managing Director",
    bio: "Civil engineer with 25+ years experience. MBA from Lagos Business School.",
    image: "/team/md.jpg",
  },
  {
    name: "Engr. Adaobi Nwosu",
    role: "Technical Director",
    bio: "Structural engineer specializing in steel construction and industrial facilities.",
    image: "/team/technical.jpg",
  },
  {
    name: "Mr. Ibrahim Musa",
    role: "Operations Director",
    bio: "Expert in heavy equipment operations, logistics, and project execution across Nigeria.",
    image: "/team/operations.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              About Slymax Nigeria Limited
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              50+ Years of Building
              <br />
              <span className="text-primary-600">Excellence Across Nigeria</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From a modest construction firm in Owerri to one of Nigeria's leading integrated industrial solutions providers.
              Our journey is built on trust, quality, and unwavering commitment to client success.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="mission-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
                Our Purpose
              </span>
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Mission, Vision & Core Values
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver world-class construction, industrial equipment, and material supply solutions that empower 
                    our clients' success, while maintaining the highest standards of safety, quality, and environmental responsibility.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be Nigeria's most trusted and innovative industrial solutions partner, recognized for excellence 
                    in every project we undertake and every relationship we build.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="history-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 id="history-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Five Decades of Growth & Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From humble beginnings to national recognition, every milestone represents our commitment to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden lg:block" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex lg:flex-row"
                >
                  <div className={index % 2 === 0 ? "lg:w-1/2 lg:pr-12 lg:text-right" : "lg:w-1/2 lg:pl-12 lg:ml-auto"}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm lg:absolute lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 lg:ml-0">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "lg:w-1/2" : "lg:w-1/2"}>
                    <div className="lg:hidden text-center my-4">
                      <div className="inline-block w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="certifications-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Standards & Accreditations
            </span>
            <h2 id="certifications-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Certified Excellence in Every Operation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain the highest industry standards through rigorous certifications and approvals
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600 mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <CheckCircle className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-center font-medium text-gray-900 text-sm leading-relaxed">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="leadership-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Leadership Team
            </span>
            <h2 id="leadership-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Guided by Experience & Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our leadership combines decades of technical expertise with strategic business acumen
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" 
                    onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.classList.add('opacity-100'); }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Building2 className="h-16 w-16 text-gray-300" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Partner with Industry Leaders?
            </h2>
            <p className="text-lg text-primary-100 leading-relaxed mb-8">
              Join hundreds of satisfied clients who trust Slymax Nigeria Limited for their construction, 
              industrial equipment, and material supply needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl" variant="default">
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="xl" className="w-full sm:w-auto px-10 py-4 border-white text-white hover:bg-white/10" variant="outline">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}