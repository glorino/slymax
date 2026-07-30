"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Droplets, Settings, Shield, Truck } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const waterServices = [
  {
    title: "Borehole Drilling",
    description: "Professional borehole drilling services for residential, commercial, and industrial water supply.",
    icon: Droplets,
    features: ["Site Survey & Investigation", "Borehole Drilling", "Test Pumping", "Water Quality Analysis", "Well Completion", "Documentation"],
  },
  {
    title: "Water Treatment",
    description: "Complete water treatment solutions for potable water and industrial applications.",
    icon: Shield,
    features: ["Filtration Systems", "UV Treatment", "Chemical Dosing", "Reverse Osmosis", "Water Testing", "Quality Monitoring"],
  },
  {
    title: "Distribution Systems",
    description: "Water distribution system design, installation, and maintenance for various applications.",
    icon: Settings,
    features: ["Pipeline Installation", "Storage Tanks", "Pump Stations", "Pressure Systems", "Network Design", "Flow Monitoring"],
  },
  {
    title: "Maintenance Services",
    description: "Ongoing maintenance and support for water supply systems and equipment.",
    icon: Truck,
    features: ["System Inspections", "Pump Servicing", "Pipeline Repairs", "Water Quality Testing", "Emergency Support", "Preventive Maintenance"],
  },
]

const projectHighlights = [
  {
    title: "Community Water Supply Project",
    category: "Community",
    location: "Edo State",
    year: "2024",
    description: "Complete water supply system for 10 communities including boreholes, treatment, and distribution.",
  },
  {
    title: "Industrial Water Treatment",
    category: "Industrial",
    location: "Lagos State",
    year: "2023",
    description: "Water treatment plant installation for a manufacturing facility with 500,000 liters/day capacity.",
  },
  {
    title: "Estate Water Distribution",
    category: "Residential",
    location: "Rivers State",
    year: "2024",
    description: "Borehole drilling and water distribution system for a 300-unit residential estate.",
  },
]

export default function WaterEngineeringPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                Water Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Complete
                <br />
                <span className="text-blue-600">Water Engineering</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Borehole drilling, water treatment, distribution systems, and maintenance. 
                Providing clean, reliable water solutions for communities and industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Boreholes Drilled</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">1M+</div>
                <div className="text-sm text-gray-600">Liters/Day Capacity</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Water Quality</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Our Water Engineering Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Clean Water Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {waterServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700">
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
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-blue-600 hover:text-blue-700" asChild>
                      <Link href="/contact">
                        Discuss Your Project
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
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
              Need Clean Water Solutions?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for complete water engineering services. 
              From borehole drilling to treatment plants, we deliver clean water.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg" variant="default">
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
