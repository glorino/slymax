"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Flame, Shield, Truck, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const gasServices = [
  {
    title: "Gas Regulators & Equipment",
    description: "High-quality gas regulators, valves, and control equipment for industrial and commercial use.",
    icon: Flame,
    features: ["Pressure Regulators", "Control Valves", "Flow Meters", "Safety Valves", "Gas Detectors", "Industrial Burners"],
  },
  {
    title: "Cylinder Supply",
    description: "Reliable supply of industrial and commercial gas cylinders in various sizes and specifications.",
    icon: Truck,
    features: ["Oxygen Cylinders", "Nitrogen Cylinders", "LPG Cylinders", "Specialty Gases", "Bulk Supply", "Regular Refills"],
  },
  {
    title: "Safety Equipment",
    description: "Complete range of gas safety equipment for workplace protection and compliance.",
    icon: Shield,
    features: ["Gas Monitors", "Leak Detectors", "Emergency Shut-offs", "Protective Gear", "Safety Alarms", "Ventilation Systems"],
  },
  {
    title: "Installation & Maintenance",
    description: "Professional installation, maintenance, and calibration of gas equipment systems.",
    icon: Wrench,
    features: ["System Installation", "Regular Maintenance", "Calibration Services", "Emergency Repairs", "System Upgrades", "Technical Support"],
  },
]

const projectHighlights = [
  {
    title: "Industrial Gas System Installation",
    category: "Industrial",
    location: "Lagos State",
    year: "2024",
    description: "Complete gas distribution system installation for a manufacturing facility.",
  },
  {
    title: "Hospital Oxygen Supply System",
    category: "Healthcare",
    location: "Edo State",
    year: "2023",
    description: "Centralized oxygen supply system design and installation for a 200-bed hospital.",
  },
  {
    title: "Restaurant Chain Gas Setup",
    category: "Commercial",
    location: "Rivers State",
    year: "2024",
    description: "LPG supply and installation services for a chain of 15 restaurants.",
  },
]

export default function GasEquipmentPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl" aria-hidden="true" />
        <Container className="relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
                Gas Equipment
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professional
                <br />
                <span className="text-red-600">Gas Equipment Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Quality gas regulators, cylinder supply, safety equipment, and professional installation 
                services for industrial and commercial applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700 text-white">
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
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">5K+</div>
                <div className="text-sm text-gray-600">Cylinders Supplied</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Safety Compliance</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Installations</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Gas Services
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Complete Gas Equipment Solutions
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {gasServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-red-500 to-red-700">
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
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full justify-start px-0 text-red-600 hover:text-red-700" asChild>
                      <Link href="/contact">
                        Request a Quote
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

      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-600 via-red-700 to-red-900 relative overflow-hidden">
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
              Need Reliable Gas Equipment?
            </h2>
            <p className="text-lg text-red-100 leading-relaxed mb-8">
              Partner with Slymax Nigeria Limited for quality gas equipment and professional services. 
              Safety guaranteed, delivery nationwide.
            </p>
            <Button asChild size="xl" className="px-10 py-4 bg-white text-red-600 hover:bg-red-50 shadow-lg" variant="default">
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
