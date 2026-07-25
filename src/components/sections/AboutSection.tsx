"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Building2, Award, Shield, Users, Truck, HardHat, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-incident safety culture with comprehensive HSE programs and continuous training for all personnel.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "ISO 9001:2015 certified processes ensuring every project meets international quality standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Long-term relationships built on transparency, reliability, and exceeding client expectations.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description: "Embracing modern construction methods and technology for efficient, sustainable solutions.",
  },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "NNPC/DPR Approved Vendor",
  "CAC Registered (RC 1234567)",
  "NSE Corporate Member",
]

const milestones = [
  { year: "1974", event: "Founded as a small construction firm in Owerri" },
  { year: "1990", event: "Expanded into steel material supply & distribution" },
  { year: "2005", event: "Achieved ISO 9001 certification" },
  { year: "2012", event: "Launched heavy equipment leasing division" },
  { year: "2018", event: "Became NNPC/DPR approved vendor" },
  { year: "2024", event: "500+ projects completed nationwide" },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="about-heading">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              About Slymax Nigeria Limited
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              50+ Years of Excellence in Construction & Industrial Solutions
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Established in 1974, Slymax Nigeria Limited has grown from a local construction company 
                into one of Nigeria's leading integrated industrial solutions providers. With headquarters 
                in Owerri, Imo State, we serve clients across Nigeria with a comprehensive range of services.
              </p>
              <p>
                Our expertise spans construction, steel supply, scaffolding systems, gas & fire equipment, 
                heavy machinery leasing, and crane solutions. We pride ourselves on delivering projects 
                on time, within budget, and to the highest safety and quality standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-4 bg-white rounded-xl border border-gray-100"
                >
                  <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                  <div className="text-sm text-gray-600 mt-1">{milestone.event}</div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Certifications & Accreditations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through rigorous certifications and approvals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white p-4 rounded-xl border border-gray-100 text-center text-sm font-medium text-gray-700"
              >
                <CheckCircle className="h-6 w-6 text-primary-600 mx-auto mb-2" aria-hidden="true" />
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}