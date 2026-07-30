"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Settings, Wrench, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const maintenanceServices = [
  {
    title: "Facility Management",
    description: "Comprehensive facility management services for commercial and industrial properties.",
    icon: Settings,
    features: ["Building Maintenance", "Cleaning Services", "Security Services", "Landscaping", "Energy Management", "Space Management"],
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to prevent equipment failure and extend asset life.",
    icon: Wrench,
    features: ["Equipment Servicing", "System Inspections", "Lubrication Programs", "Filter Replacements", "Calibration", "Performance Testing"],
  },
  {
    title: "Repairs & Overhaul",
    description: "Expert repair services and complete equipment overhaul when needed.",
    icon: Clock,
    features: ["Emergency Repairs", "Equipment Overhaul", "Parts Replacement", "System Upgrades", "Retrofit Services", "Condition Monitoring"],
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency response services.",
    icon: Shield,
    features: ["Emergency Response", "Hotline Support", "On-Site Technicians", "Remote Diagnostics", "Spare Parts Supply", "Service Level Agreements"],
  },
]

const projectHighlights = [
  {
    title: "Industrial Plant Maintenance",
    category: "Industrial",
    location: "Lagos State",
    year: "2024",
    description: "Complete maintenance contract for a manufacturing plant including all mechanical and electrical systems.",
  },
  {
    title: "Commercial Building Management",
    category: "Commercial",
    location: "Edo State",
    year: "2023",
    description: "Full facility management for a 10-story office complex including HVAC, plumbing, and electrical.",
  },
  {
    title: "Oil & Gas Equipment Maintenance",
    category: "Oil & Gas",
    location: "Rivers State",
    year: "2024",
    description: "Preventive maintenance program for production equipment and pipeline systems.",
  },
]

export default function OperationMaintenancePage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                Operation & Maintenance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Reliable
                <br />
                <span className="text-indigo-600">O&M Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Facility management, preventive maintenance, repairs, and 24/7 support. 
                Keeping your operations running smoothly and efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-indigo-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Facilities Managed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-indigo-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">99%</div>
                <div className="text-sm text-gray-600">Uptime Achieved</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-indigo-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-indigo-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              Our O&M Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Operations Support
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {maintenanceServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-indigo-500 to-indigo-700">
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
                          <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-indigo-600 hover:text-indigo-700" asChild>
                      <Link href="/contact">
                        Discuss Your Needs
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 relative overflow-hidden">
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
              Keep Your Operations Running Smoothly
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for reliable O&M services. 
              Preventive maintenance, expert repairs, and 24/7 support.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg" variant="default">
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
