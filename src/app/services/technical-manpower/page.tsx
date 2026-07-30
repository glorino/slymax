"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Users, HardHat, Shield, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const manpowerServices = [
  {
    title: "Professional Engineers",
    description: "Experienced engineers for civil, mechanical, electrical, and structural projects.",
    icon: Briefcase,
    features: ["Civil Engineers", "Mechanical Engineers", "Electrical Engineers", "Structural Engineers", "Project Engineers", "Site Engineers"],
  },
  {
    title: "Technical Technicians",
    description: "Skilled technicians for equipment operation, maintenance, and technical support.",
    icon: HardHat,
    features: ["Equipment Operators", "Welders & Fabricators", "Electricians", "Plumbers", "HVAC Technicians", "Instrumentation Techs"],
  },
  {
    title: "Project Managers",
    description: "Certified project managers to oversee and deliver complex construction projects.",
    icon: Users,
    features: ["PMP Certified", "Risk Management", "Resource Planning", "Stakeholder Management", "Budget Control", "Quality Assurance"],
  },
  {
    title: "Safety Officers",
    description: "HSE professionals to ensure workplace safety and regulatory compliance.",
    icon: Shield,
    features: ["HSE Officers", "Safety Audits", "Risk Assessment", "Training & Induction", "Incident Investigation", "Compliance Reporting"],
  },
]

const projectHighlights = [
  {
    title: "Oil & Gas Manpower Supply",
    category: "Oil & Gas",
    location: "Rivers State",
    year: "2024",
    description: "Supply of 100+ skilled technicians and engineers for refinery maintenance project.",
  },
  {
    title: "Construction Site Staffing",
    category: "Construction",
    location: "Lagos State",
    year: "2023",
    description: "Complete project team including managers, engineers, and technicians for a high-rise project.",
  },
  {
    title: "Industrial Plant Operations",
    category: "Industrial",
    location: "Edo State",
    year: "2024",
    description: "Long-term manpower supply for factory operations including operators and maintenance staff.",
  },
]

export default function TechnicalManpowerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                Technical Manpower
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Skilled
                <br />
                <span className="text-green-600">Technical Manpower</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Engineers, technicians, project managers, and safety officers for your projects. 
                Experienced professionals ready for immediate deployment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">1K+</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Projects Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              Our Manpower Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Workforce Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {manpowerServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-green-500 to-green-700">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-green-600 hover:text-green-700" asChild>
                      <Link href="/contact">
                        Request Manpower
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-r from-green-600 via-green-700 to-green-900 relative overflow-hidden">
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
              Need Skilled Professionals for Your Project?
            </h2>
            <p className="text-lg text-green-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for reliable manpower solutions. 
              Experienced professionals, competitive rates, immediate availability.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-green-600 hover:bg-green-50 shadow-lg" variant="default">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
